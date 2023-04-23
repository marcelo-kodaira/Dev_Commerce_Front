import { useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { RiArrowDownSLine } from 'react-icons/ri';
import { Container, DropdownAccount, DropdownButton, DropdownContainer, DropdownInfo, DropdownLogout,HeaderButtons, HeaderContainer, HeaderProfile, LinkHome, LinkMyProducts, StyledAvatar, StyledLogo } from "./styles";
import {useLocation } from "react-router-dom";
import Logo from '../../assets/logo.png'



const Header = () =>{

    const [open, setOpen] = useState(false);
    const {user,signOut} = useAuth()
    const dropdownRef = useRef<HTMLDivElement>(null);

    const location = useLocation();

  const handleClickOutside = useMemo(() => (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);



    return(
        <HeaderContainer>
            <Container>
                <StyledLogo src={Logo} alt="logo The Market"/>
                <HeaderButtons>
                  {
                    location.pathname == '/home'?(
                      <LinkMyProducts to={"/myproducts"}>Meus Produtos</LinkMyProducts>
                    ):
                    (
                      <LinkHome to={"/home"}>Home</LinkHome>
                    )
                  }
                  <HeaderProfile open={open} onClick={(e) => { e.stopPropagation(); setOpen(!open);}}>
                      {user.name}
                      <RiArrowDownSLine/>
                  </HeaderProfile>
                </HeaderButtons>
            </Container>
            
            <DropdownContainer open={open} ref={dropdownRef}>
                <DropdownAccount>

                  <StyledAvatar size={40}/>
                  
                    <DropdownInfo>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </DropdownInfo>

                    <DropdownButton>Alterar dados da conta</DropdownButton>
                </DropdownAccount>
                <DropdownLogout onClick={signOut}>
                    <p>Logout</p>
                </DropdownLogout>
            </DropdownContainer>
        </HeaderContainer>
    )
}

export default Header