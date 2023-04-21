import styled from "styled-components";



export const IconDiv = styled.div`
    color: ${props => props.color};
`

export const StyledInput = styled.input`
    border: 1px solid black;
    font-weight: lighter;
    outline: none;
    width: 90%;
    height: 45px;
    padding-left: 1.4rem;
    background-color: #ebeced;
    color: ${props => props.color};
    border-color: ${props => props.color};
    &:focus {
        background-color: #F7FAFC;
    }
    &::placeholder {
        color: #2d2d2e;
    }
    &:hover {
        background-color: #E2E8F0;
    }
`