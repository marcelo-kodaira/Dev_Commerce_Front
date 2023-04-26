import { useEffect, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useProducts } from "../../contexts/ProductsContext"
import NotFound from "./ProductNotFound/ProductNotFound"
import FirstProduct from "./FirstProduct/FirstProduct"
import ProductList from "./ProductList/ProductList"
import Header from "../../components/Header"
import SearchFilter from "../../components/Filter/SearchFilter"
import { HomeContainer, ListContainer } from "./styles"
import Filters from "./Filters"
import { useLocation } from "react-router-dom"

interface LocationState {
    isModalRoute: boolean;
    fromModal?: boolean;
  }

const Home = () =>{
    
    const [loading,setLoading] = useState(false)
    const {token} = useAuth()
    const {products, loadProducts, notFound, productNotFound} = useProducts()

    useEffect(() =>{
        if (!products.length) {
            setLoading(true)
            loadProducts(token)
            .then(_ => setLoading(false))
        }
    },[])


    if(notFound){
        return <NotFound  productNotFound={productNotFound}/>
    }

    return(
        <>
        <Header/>
        <HomeContainer>
        
                {
                !products.length && !loading ?
                <FirstProduct/>
                :
                <>  
                    <SearchFilter/>
                    <Filters/>
                    <ListContainer>    
                        <ProductList products={products} loading={loading} />
                    </ListContainer>
                </>
                }
        </HomeContainer>
        </>
    )
}

export default Home