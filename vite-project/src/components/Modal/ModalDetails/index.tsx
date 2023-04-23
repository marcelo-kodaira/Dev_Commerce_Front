import Modal from '@mui/material/Modal';
import { StyledContainer, InfoTitle, InfoContainer, Price, AnnouncerInfo, ProductDescription } from './styles';


interface SelectedProduct{
  name: string
  description: string
  price: number
  user:{
    name: string
    email: string
  }
}


interface ModalProductDetailsProps {
    open: boolean;
    handleClose: () => void;
    product: SelectedProduct | null
}

const ModalProductDetails = ({ open, handleClose, product}: ModalProductDetailsProps) =>{

    return (
        <div>
      
        <Modal
          
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >

          <StyledContainer>
            <InfoTitle id="modal-modal-title">
              {product?.name}
            </InfoTitle>
            <InfoContainer>
            <ProductDescription>
              {product?.description}
            </ProductDescription>
            <AnnouncerInfo>
            <p>Anunciante: {product?.user.name}</p>
            <p>Contato: {product?.user.email}</p>
            </AnnouncerInfo>
            <Price>R$ {product?.price.toFixed(2).replace(".",",")}</Price> 
            </InfoContainer>
          </StyledContainer>


           
        </Modal>
      </div>
    )
}

export default ModalProductDetails