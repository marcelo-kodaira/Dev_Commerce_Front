import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { RiArrowDownSLine } from 'react-icons/ri';
import { Container, HeaderButtons, HeaderContainer, HeaderProfile, LinkHome, LinkMyProducts, StyledLogo } from "./styles";
import {Link, useLocation } from "react-router-dom";
import Logo from '../../assets/logo.png'
import ModalEditUser from "../Modal/ModalEditUser";
import DropdownMenu from "./DropdownMenu";

const Header = () =>{

    const [openMenu, setOpenMenu] = useState(false);
    const {user} = useAuth()
    const location = useLocation();
    
    //Modal states and functions
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true)

    return(
      <>
      <ModalEditUser open={open} handleClose={handleClose} />
        <HeaderContainer>
            <Container>
                    <Link to={"/home"}><StyledLogo src={Logo} alt="logo The Market"/></Link>
                <HeaderButtons>
                  {
                     location.pathname.includes('/home') ?(
                      <LinkMyProducts to={"/myproducts"}>Meus Produtos</LinkMyProducts>
                    ):
                    (
                      <LinkHome to={"/home"}>Home</LinkHome>
                    )
                  }
                  <HeaderProfile openMenu={openMenu} onClick={(e) => { e.stopPropagation(); setOpenMenu(!openMenu);}}>
                      {user.name}
                      <RiArrowDownSLine/>
                  </HeaderProfile>
                </HeaderButtons>
            </Container>
            <DropdownMenu openMenu={openMenu} setOpenMenu={setOpenMenu} handleOpen={handleOpen}/>
        </HeaderContainer>
      </>
    )
}

export default Header