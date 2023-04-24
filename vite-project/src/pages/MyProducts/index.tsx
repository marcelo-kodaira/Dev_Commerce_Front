import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { MyProductsContainer, TitleContainer } from './styles'
import { useAuth } from '../../contexts/AuthContext'
import { useProducts } from '../../contexts/ProductsContext'
import MyProductsList from './MyProductsList'
import MyFirstProduct from './MyFirstProduct'
import ModalCreateProduct from '../../components/Modal/ModalCreateProduct'


const MyProducts = () => {

  const [loading,setLoading] = useState(true)
  const {token} = useAuth()
  const {products, loadMyProducts} = useProducts()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(() =>{
      loadMyProducts(token)
      .then(_ => setLoading(false))
  },[])

  return (
    <div>
        <ModalCreateProduct open={open} handleClose={handleClose} />

        <Header/>
        <MyProductsContainer>
        <TitleContainer>
          <h1>Meus produtos</h1>
          <button onClick={() => handleOpen()}>Adicionar Produto</button>
        </TitleContainer> 
        {
          !products.length && !loading ?
          <MyFirstProduct/>
          :   
          <MyProductsList loading={loading} products={products}/>
        }
        </MyProductsContainer>
    </div>
  )
}

export default MyProducts