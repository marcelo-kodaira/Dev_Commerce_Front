import styled from 'styled-components'
import { Input } from '../Input';

export const StyledFlex = styled.div`
  border-bottom-width: 1px;
  border-color: #E2E8F0;
`;

export const StyledInput = styled(Input)`
  width: 30vw;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchButton = styled.button`

background-color: ${props => props.theme.secondaryColor};;
  color: white;
  font-size: 1.3rem;
  width: 60px;
  height: 55px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }

  @media screen and (max-width: 768px) {
    margin-left: 1.5rem;
  }
  
`;


export const SearchBoxContainer = styled.div`
  margin-top: 6px;
  width: 100%;
  padding: 2px;
  padding-bottom: 6px;
`;

export const SearchForm = styled.form`
    display: flex;
    gap: 10px;
    align-items: center;
`