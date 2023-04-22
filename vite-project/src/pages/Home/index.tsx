import { useEffect, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useProducts } from "../../contexts/ProductsContext"
import NotFound from "./ProductNotFound"
import FirstProduct from "./FirstProduct"
import ProductList from "./ProductList/ProductList"
import Header from "../../components/Header"
import SearchFilter from "../../components/Filter/SearchFilter"
import { HomeContainer, ListContainer } from "./styles"


interface Product{
    id: string,
    name: string,
    price: number,
    description: string,
}
const Home = () =>{
    
    const [loading,setLoading] = useState(true)
    const {token} = useAuth()
    const {products, loadProducts, notFound, productNotFound} = useProducts()

    const[selectedProduct, setSelectedProduct] = useState<Product>({} as Product)


    useEffect(() =>{
        loadProducts(token)
        .then(res => setLoading(false))
    },[])


    if(notFound){
        return <NotFound selectedProduct={selectedProduct} contactNotFound={productNotFound}/>
    }

    return(
        <>
        <Header/>
        <HomeContainer>
            <SearchFilter/>
            <ListContainer>
                {
                !products.length && !loading ?
                <FirstProduct/>
                :   
                <ProductList products={products} loading={loading} />
                }
            </ListContainer>
        </HomeContainer>
        </>
    )
}

export default Home