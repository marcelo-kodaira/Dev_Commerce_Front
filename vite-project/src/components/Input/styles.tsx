import styled from "styled-components";

interface InputProps {
    color: string;
  }

export const StyledInput = styled.input<InputProps>`
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