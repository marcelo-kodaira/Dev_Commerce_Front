import Modal from '@mui/material/Modal';
import { StyledContainer, InfoTitle, InfoContainer, Price, AnnouncerInfo, ProductDescription } from './styles';
import { useHistory, useParams, RouteComponentProps } from 'react-router-dom';
import { useProducts } from '../../../contexts/ProductsContext';
import { History } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';

interface SelectedProduct{
  name: string
  description: string
  price: number
  user:{
    name: string
    email: string
  }
}


type ProductParams = {
  id: string;
}

const ModalProductDetails = () =>{
  const {id} = useParams<ProductParams>()
  const {token} = useAuth()
  const {product,loadProductId} = useProducts()
  const history = useHistory()
  const [open, setOpen] = useState(true);
  const [loading,setLoading] = useState(true)

    useEffect(() =>{
      loadProductId(id,token)
      .finally(() => setLoading(false))
    },[id])

    console.log('o')


    const handleClose = () => {
      history.push('/')
      setOpen(false)
    }
    
    return (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledContainer>
          {
  loading ? (
    <p>Carregando...</p>
  ) : (
    product ? (
      <>
        <InfoTitle id="modal-modal-title">
          {product.name}
        </InfoTitle>
        <InfoContainer>
          <ProductDescription>
            {product.description}
          </ProductDescription>
          <AnnouncerInfo>
            <p>Anunciante: {product.user.name}</p>
            <p>Contato: {product.user.email}</p>
          </AnnouncerInfo>
          <Price>R$ {product.price.toFixed(2).replace(".",",")}</Price> 
        </InfoContainer>
      </>
    ) : (
      <p>Produto não encontrado.</p>
    )
  )
}
          </StyledContainer>
        </Modal>
    )
}

export default ModalProductDetails