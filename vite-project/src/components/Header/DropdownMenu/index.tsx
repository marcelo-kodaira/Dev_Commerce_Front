import React, { useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { AiOutlineUserDelete } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import { DropdownContainer, DropdownAccount, StyledAvatar, DropdownInfo,DropdownButton, DropdownLogout,} from "./styles"
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

type DropdownMenuProps = {
  openMenu: boolean
  setOpenMenu: any
  handleOpen: () => void
};

const DropdownMenu = ({  handleOpen, openMenu,setOpenMenu }:DropdownMenuProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, signOut, deleteUser, token } = useAuth();

  const handleClickOutside = useMemo(() => (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setOpenMenu(false);
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

  return (
    <DropdownContainer openMenu={openMenu} ref={dropdownRef}>
      <DropdownAccount>
        <StyledAvatar size={40} />

        <DropdownInfo>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </DropdownInfo>

        <DropdownButton onClick={() => handleOpen()}>
          Alterar dados da conta
        </DropdownButton>
      </DropdownAccount>

      <DropdownLogout onClick={signOut}>
        <p>Logout</p>
        <IoLogOutOutline />
      </DropdownLogout>

      <DropdownLogout onClick={() => handleDelete()}>
        <p>Excluir conta</p>
        <AiOutlineUserDelete />
      </DropdownLogout>
    </DropdownContainer>
  );
};

export default DropdownMenu;
