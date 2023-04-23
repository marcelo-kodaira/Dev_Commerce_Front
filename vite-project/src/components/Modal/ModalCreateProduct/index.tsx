import Modal from '@mui/material/Modal';
import { useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { createProductSchema } from '../../../Schemas/createProduct.schema';
import { useAuth } from '../../../contexts/AuthContext';
import { useProducts } from '../../../contexts/ProductsContext';
import { Input } from '../../Input';
import { ModalButton, InputContainer, ModalTitle, StyledForm } from '../ModalStyles';

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
  const {createProduct} = useProducts()

  
  const handleCreateProduct = (data:Product) =>{
    createProduct(data,token)
    .then(_ => handleClose())
    .catch(err => console.log(err))
  }

  return (
    <div>
      
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
            <Input label='Descrição' error={errors.description} {...register('description')} placeholder='Nome a descrição do produto' />
            <Input type='string' label='Preço' error={errors.price} {...register('price')} placeholder='Nome o preço do produto' />
          </InputContainer>

          <ModalButton type='submit'>Adicionar produto</ModalButton>

        </StyledForm>
      </Modal>
    </div>
  );
}

export default ModalCreateProduct