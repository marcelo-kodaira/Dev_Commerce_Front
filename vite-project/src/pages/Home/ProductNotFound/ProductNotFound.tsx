import SearchFilter from "../../../components/Filter/SearchFilter"
import Header from "../../../components/Header"
import { HomeContainer } from "../styles"
import { NotFoundContainer } from "./styles"

interface NotFoundProps{
    productNotFound: string
}

const NotFound = ({productNotFound}:NotFoundProps) =>{

    return(
        <>
            <Header/>
            <HomeContainer>
                <SearchFilter/>
                <NotFoundContainer>
                        <h1>Infelizmente não encontramos <br/>
                        resultados para:<span> {productNotFound}</span></h1>
                </NotFoundContainer>
            </HomeContainer>
        </>
    )
}

export default NotFound