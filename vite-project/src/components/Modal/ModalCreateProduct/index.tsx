import Modal from '@mui/material/Modal';
import { useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { createProductSchema } from '../../../Schemas/createProduct.schema';
import { useAuth } from '../../../contexts/AuthContext';
import { useProducts } from '../../../contexts/ProductsContext';
import { Input } from '../../Input';
import { ModalButton, InputContainer, ModalTitle, StyledForm } from '../ModalStyles';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TbCurrencyReal} from "react-icons/tb"
import { useState } from 'react';
import { SpinnerDotted } from 'spinners-react';

interface Product {
    id: String,
    name: string,
    price: number,
    description: string
}

interface ModalCreateProductProps {
    open: boolean;
    handleClose: () => void;
}

const ModalCreateProduct = ({open,handleClose}:ModalCreateProductProps) => {

  const {formState:{errors}, register, handleSubmit} = useForm<Product>({
    resolver: yupResolver(createProductSchema)
  })

  const {token} = useAuth()
  const [loading, setLoading] = useState(false)
  const {createProduct} = useProducts()


  const handleCreateProduct = (data:Product) =>{
    setLoading(true)
    createProduct(data,token)
    .then(_ => {
      setLoading(false)
      handleClose()
      toast.success('Produto cadastrado!')
    })
    .catch(err => {toast.error(err); setLoading(false)})
  }

  return (

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledForm onSubmit={handleSubmit(handleCreateProduct)}>
          <ModalTitle id="modal-modal-title">
            Cadastre seu produto
          </ModalTitle>

          <InputContainer id="modal-modal-description">
            <Input label='Nome' error={errors.name} {...register('name')} placeholder='Nome do produto' />
            <Input label='Descrição' error={errors.description} {...register('description')} placeholder='Descrição do produto' />
            <Input label='Preço' error={errors.price} {...register('price')} icon={TbCurrencyReal} placeholder='Preço do produto' />
          </InputContainer>

          <ModalButton type='submit' disabled={loading}>{loading?<SpinnerDotted color="white" size={"30px"}/>: 'Cadastrar produto'}</ModalButton>

        </StyledForm>
      </Modal>

  );
}

export default ModalCreateProduct