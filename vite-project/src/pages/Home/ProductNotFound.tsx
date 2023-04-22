import SearchFilter from "../../components/Filter/SearchFilter"
import Header from "../../components/Header"
import { HomeContainer } from "./styles"


interface Product{
    id: string,
    name: string,
    price: number,
    description: string,
}

interface NotFoundProps{
    selectedProduct: Product
    contactNotFound: string
}

const NotFound = ({selectedProduct,contactNotFound}:NotFoundProps) =>{

    return(
        <>
            <Header/>
            <HomeContainer>
                <SearchFilter/>
                <section>
                        <h2>Infelizmente não conseguimos encontrar:</h2>
                        <span>{contactNotFound}</span>
                </section>
            </HomeContainer>
        </>
    )
}

export default NotFound