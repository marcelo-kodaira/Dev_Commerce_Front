import { useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { RiArrowDownSLine } from 'react-icons/ri';
import { Container, DropdownAccount, DropdownButton, DropdownContainer, DropdownInfo, DropdownLogout,HeaderButtons, HeaderContainer, HeaderProfile, LinkHome, LinkMyProducts, StyledAvatar, StyledLogo } from "./styles";
import {Link, useLocation } from "react-router-dom";
import Logo from '../../assets/logo.png'
import ModalEditUser from "../Modal/ModalEditUser";
import {IoLogOutOutline} from "react-icons/io5"
import {AiOutlineUserDelete} from "react-icons/ai"
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const Header = () =>{

    const [openMenu, setopenMenu] = useState(false);
    const {user,signOut,deleteUser,token} = useAuth()
    const dropdownRef = useRef<HTMLDivElement>(null);

    const location = useLocation();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  const handleClickOutside = useMemo(() => (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setopenMenu(false);
    }
  }, []);


  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const MySwal = withReactContent(Swal);

    const handleDelete = () =>{
        MySwal.fire({
            title: 'Você tem certeza?',
            text: "Essa ação é irreversível!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Deletar'
          }).then((result) => {
            if (result.isConfirmed) {
              MySwal.fire(
                'Deletado!',
                'O seu produto foi deletado.',
                'success'
              )
              deleteUser(user.id,token);
              signOut()
            }
          })
        }

    return(
      <>
      <ModalEditUser open={open} handleClose={handleClose} />
        <HeaderContainer>
            <Container>
                {
                  location.pathname == '/home'?(
                    <StyledLogo src={Logo} alt="logo The Market"/>
                  ):
                  (
                    <Link to={"/home"}><StyledLogo src={Logo} alt="logo The Market"/></Link>
                  )
                  }
                <HeaderButtons>
                  {
                    location.pathname == '/home'?(
                      <LinkMyProducts to={"/myproducts"}>Meus Produtos</LinkMyProducts>
                    ):
                    (
                      <LinkHome to={"/home"}>Home</LinkHome>
                    )
                  }
                  <HeaderProfile openMenu={openMenu} onClick={(e) => { e.stopPropagation(); setopenMenu(!openMenu);}}>
                      {user.name}
                      <RiArrowDownSLine/>
                  </HeaderProfile>
                </HeaderButtons>
            </Container>
            
            <DropdownContainer openMenu={openMenu} ref={dropdownRef}>

                <DropdownAccount>
                  <StyledAvatar size={40}/>
                  
                    <DropdownInfo>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </DropdownInfo>

                    <DropdownButton onClick={() => handleOpen()}>Alterar dados da conta</DropdownButton>
                </DropdownAccount>

                <DropdownLogout onClick={signOut}>
                    <p>Logout</p>
                    <IoLogOutOutline/>
                </DropdownLogout>

                <DropdownLogout onClick={handleDelete}>
                    <p>Excluir conta</p>
                    <AiOutlineUserDelete/>
                </DropdownLogout>

            </DropdownContainer>
        </HeaderContainer>
      </>
    )
}

export default Header