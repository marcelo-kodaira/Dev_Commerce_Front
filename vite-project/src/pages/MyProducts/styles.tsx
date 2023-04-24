import styled from "styled-components";

export const MyProductsContainer = styled.main`
    max-width: 90%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    gap: 35px;

`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        width: 150px;
        height: 50px;
        background-color: ${props => props.theme.secondaryColor};
        color: white;
        border: unset;
        border-radius: 5px;
        cursor: pointer;

        &:hover{
            filter: brightness(1.2)
        }
    }
`