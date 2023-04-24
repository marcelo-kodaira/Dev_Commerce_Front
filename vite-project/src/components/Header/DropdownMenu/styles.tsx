import { FaUser } from "react-icons/fa";
import styled from "styled-components";

export const DropdownContainer = styled.nav<{ openMenu: boolean }>`
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
  ${({ openMenu }) => openMenu && `
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

    p{
      margin-right: 5px;
    }
`