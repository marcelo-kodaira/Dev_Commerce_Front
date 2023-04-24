import { Link } from "react-router-dom";
import styled from "styled-components";

export const FirstProductSection = styled.section`
    width: 50%;

    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1{
        font-weight: bolder;
    }

    p{
        font-size: 1.1rem;
        font-weight: lighter;
    }

`

export const StyledButton = styled.button`
    margin-top: 20px;
    width: 200px;
    height: 40px;
    color: white;
    font-weight: lighter;
    background: dodgerblue;
    border: unset;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        box-shadow: 0px 0px 5px 3px rgba(30, 144, 255, 0.7), 0px 0px 5px 5px rgba(30, 144, 255, 0.5), 0px 0px 5px 7px rgba(30, 144, 255, 0.3);
    }
`