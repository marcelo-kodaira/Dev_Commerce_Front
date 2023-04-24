import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 90%;
    margin: 30px auto;

`

export const ListContainer = styled.section`
    display: flex;
    gap: 5em;
    flex-wrap: wrap;

    @media screen and (max-width: 500px){
        gap: 1em;
        justify-content: center;
    }
`