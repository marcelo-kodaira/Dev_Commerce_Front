import styled from 'styled-components'

export const SignUpForms = styled.form`
    width: 400px;
    color: black;

    div{
        margin: 10px auto;

    }

    p{
        text-align: center;
    }

    @media (max-width: 880px) {
      width: 95vw;
    }

`

export const SignInButton = styled.button`
    display: block;
    margin: 1rem auto;
    width: 85%;
    height: 45px;
    background-color: ${props => props.theme.secondaryColor};
    color: white;
    font-weight: bolder;
    font-size: 1.1rem;
    cursor: pointer;
    border: unset;
    border-radius: 5px;
    outline: none;
`

export const SignUpInfo = styled.div`
    width: 55vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        font-weight: lighter;
        padding-bottom: 1.5rem;
    }

    @media (max-width: 880px) {
      margin: 0 auto;
      width: 95vw;
    }
`

export const StyledAcess = styled.div`
    display: flex; 
`

export const StyledErro = styled.p`
    color: red;
`