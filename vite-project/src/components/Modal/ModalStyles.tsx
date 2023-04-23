import styled from "styled-components";

export const StyledForm = styled.form`
    background: white;
    min-width: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 2rem;
    transform: translate(-50%, -50%);
    border: 1px solid #000;
`

export const ModalTitle = styled.h2`
    font-weight: bolder;
    font-size: 1.5rem;
    margin-bottom: 30px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const ModalButton = styled.button`
    display: block;
    margin: 30px auto 0;
    width: 80%;
    font-weight: lighter;
    padding: .5em;
    cursor: pointer;
    background-color: dodgerblue;
    color: white;
    border: unset;
    border-radius: 5px;

    &:hover{
        filter: brightness(1.2);
    }
`