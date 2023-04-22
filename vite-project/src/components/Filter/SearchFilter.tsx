import styled from 'styled-components'
import { FaSearch } from "react-icons/fa"
import {useForm} from "react-hook-form"
import { useAuth } from "../../contexts/AuthContext"
import { useProducts } from '../../contexts/ProductsContext'
import { Input } from '../Input'


interface SearchData{
    name: string
}

const StyledFlex = styled.div`
  border-bottom-width: 1px;
  border-color: #E2E8F0;
`;

const StyledInput = styled(Input)`
  width: 30vw;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SearchButton = styled.button`

  background-color: #4A90E2;
  color: white;
  font-size: 1.3rem;
  width: 60px;
  height: 55px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #2962A3;
  }

  @media screen and (max-width: 768px) {
    margin-left: 1.5rem;
  }
  
`;


const SearchBoxContainer = styled.div`
  margin-top: 6px;
  width: 100%;
  padding: 2px;
  padding-bottom: 6px;
`;

const SearchForm = styled.form`
    display: flex;
    gap: 10px;
    align-items: center;
`

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