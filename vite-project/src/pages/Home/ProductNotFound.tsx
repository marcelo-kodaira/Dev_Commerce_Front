import SearchFilter from "../../components/Filter/SearchFilter"
import Header from "../../components/Header"
import { HomeContainer } from "./styles"

interface NotFoundProps{
    productNotFound: string
}

const NotFound = ({productNotFound}:NotFoundProps) =>{

    return(
        <>
            <Header/>
            <HomeContainer>
                <SearchFilter/>
                <section>
                        <h2>Infelizmente não conseguimos encontrar:</h2>
                        <span>{productNotFound}</span>
                </section>
            </HomeContainer>
        </>
    )
}

export default NotFound