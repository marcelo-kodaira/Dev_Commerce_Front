import Modal from '@mui/material/Modal';
import { useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from '../../../contexts/AuthContext';
import { useProducts } from '../../../contexts/ProductsContext';
import { Input } from '../../Input';
import { ModalButton , InputContainer, ModalTitle, StyledForm} from '../ModalStyles';
import { editProductSchema } from '../../../Schemas/editProduct.schema';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Product {
    id: string,
    name: string,
    price: number,
    description: string
}

interface ModalEditProductProps {
    open: boolean;
    handleClose: () => void;
    product: Product
}


const ModalEditProduct = ({open,handleClose,product}:ModalEditProductProps) => {

  const {formState:{errors}, register, handleSubmit} = useForm<Product>({
    resolver: yupResolver(editProductSchema)
  })

  const {token} = useAuth()
  const {updateProduct} = useProducts()

  
  const handleEditProduct = (data:Product) => {
    if(data.name == product.name && data.description === product.description && data.price == product.price){
      handleClose()
      return
    }
    
    updateProduct(data,product.id, token)
    .then(_ => {
      handleClose()
      toast.success('Produto alterado!')
    })
  }

  return (
    <div>
      
      <Modal
        
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledForm onSubmit={handleSubmit(handleEditProduct)}>
          <ModalTitle id="modal-modal-title">
            Altere seu produto
          </ModalTitle>

          <InputContainer id="modal-modal-description">
            <Input label='Nome' error={errors.name} {...register('name')} defaultValue={product.name} />
            <Input label='Descrição' error={errors.description} {...register('description')} defaultValue={product.description} />
            <Input type='string' label='Preço' error={errors.price} {...register('price')} defaultValue={product.price.toFixed(2)} />
          </InputContainer>

          <ModalButton type='submit'>Adicionar produto</ModalButton>

        </StyledForm>
      </Modal>
    </div>
  );
}

export default ModalEditProduct