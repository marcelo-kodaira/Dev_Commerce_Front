import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ProductEdit from '../../components/ProductEdit'
import { MyProductsContainer } from './styles'
import { useAuth } from '../../contexts/AuthContext'
import { useProducts } from '../../contexts/ProductsContext'
import MyProductsList from './MyProductsList'

interface Product{
  id: string,
  name: string,
  price: number,
  description: string,
}


const MyProducts = () => {


  const [loading,setLoading] = useState(true)
  const {token} = useAuth()
  const {products, loadMyProducts, notFound, productNotFound} = useProducts()

  const[selectedProduct, setSelectedProduct] = useState<Product>({} as Product)


  useEffect(() =>{
      loadMyProducts(token)
      .then(res => setLoading(false))
  },[])

  return (
    <div>
        <Header/>
        <MyProductsContainer>
          <MyProductsList loading={loading} products={products}/>
        </MyProductsContainer>
    </div>
  )
}

export default MyProducts