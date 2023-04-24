import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  height: 75px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 500px){
    height: 100px;
    }
`;


export const Container = styled.div`
    max-width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 500px){
    flex-direction: column;
    justify-content: space-around;
    }
    `

export const StyledLogo = styled.img`
  width: 100px;
`
export const HeaderButtons = styled.div`
  display: flex;
  gap: 30px;


  `

export const LinkMyProducts = styled(Link)`
  background-color: ${props => props.theme.secondaryColor};
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  padding: .7em;
  color: white;

  &:hover{
    filter: brightness(1.2);
  }
`

export const LinkHome = styled(LinkMyProducts)`
  background-color: ${props => props.theme.primaryColor};
`

export const HeaderProfile = styled.button<{ openMenu: boolean }>`
    display: flex;
    align-items: center;
    padding: 5px;
    margin: 0px;
    text-decoration: none;
    cursor: pointer;
    color: rgb(0, 30, 43);
    font-weight: 400;
    border: 1px solid rgb(211, 218, 218);
    background-color: rgb(255, 255, 255);
    border-radius: 10px;

  ${({ openMenu }) => openMenu && `
    filter: brightness(.9);
  `}
`;

