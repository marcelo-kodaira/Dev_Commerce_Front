import { FaUser } from "react-icons/fa";
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
  background-color: dodgerblue;
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
  background: tomato;
`

export const HeaderProfile = styled.button<{ open: boolean }>`
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

  ${({ open }) => open && `
    filter: brightness(.9);
  `}
`;

export const DropdownContainer = styled.nav<{ open: boolean }>`
  position: absolute;
  top: 100%;
  right: 5%;
  border-radius: 10px;
  width: 300px;
  max-height: 0;
  overflow: hidden;
  background-color: #2b404f;
  color: white;
  z-index: 1000;
  transition: max-height 0.8s ease-out;
  ${({ open }) => open && `
    max-height: 300px;
  `}
`;

export const DropdownAccount = styled.div`

    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    
`

export const StyledAvatar = styled(FaUser)`
    color: gray;
    background-color: lightgray;
    padding: 1rem;
    display: flex;
    align-items: center;
    border-radius: 100%;
`

export const DropdownInfo = styled.div`
    p:first-child{
        font-size: 1.2rem;
        font-weight: bolder;
        margin-bottom: .3rem;
    }

    p:last-child{
        font-size: .8rem;
        font-weight: lighter;
    }
`

export const DropdownButton = styled.button`
    background: #5C6C75;
    color: white;
    font-size: .9rem;
    border-radius: 5px;
    padding: .7em;
    cursor: pointer;

    &:hover{
        filter: brightness(1.2);
    }
`

export const DropdownLogout = styled.div`
    height: 40px;
    padding-left: 10px;
    background-color: #1C2D38;
    border-top: 1px solid gray;
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;

    &:hover{
        filter: brightness(1.2);
    }
`