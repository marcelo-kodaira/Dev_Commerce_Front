
import { FaSearch } from "react-icons/fa"
import {useForm} from "react-hook-form"
import { useAuth } from "../../contexts/AuthContext"
import { useProducts } from '../../contexts/ProductsContext'
import { SearchBoxContainer, SearchButton, SearchForm, StyledFlex, StyledInput } from "./styles"


interface SearchData{
    name: string
}



const SearchFilter = () =>{
    const {token} = useAuth()
    const { searchProduct } = useProducts()

    const handleSearch = ({name}:SearchData) => {
        searchProduct(name,token)
    }

    const {register, handleSubmit} = useForm<SearchData>()

    return(
        <>
            <SearchBoxContainer>
                <StyledFlex>
                    <SearchForm onSubmit={handleSubmit(handleSearch)}>
                        <StyledInput placeholder="Digite o nome do produto..."   {...register("name")}/>

                        <SearchButton>
                            <FaSearch color="white"/>
                        </SearchButton>
                    </SearchForm>

                </StyledFlex>
            </SearchBoxContainer>
        </>
    )
}

export default SearchFilter