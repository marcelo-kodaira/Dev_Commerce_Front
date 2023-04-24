import { useState } from "react";
import ModalCreateProduct from "../../../components/Modal/ModalCreateProduct"
import { FirstProductSection, StyledButton } from "./styles"


const FirstProduct = () =>{

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return(
        <>
            <ModalCreateProduct open={open} handleClose={handleClose} />
            <FirstProductSection>
                <h1>Ainda não há nenhum produto cadastrado...</h1>
                <p>Vá para a página dos seus produtos e cadastre um agora mesmo!</p>
                <StyledButton onClick={() => handleOpen()}>Cadastrar agora</StyledButton>
            </FirstProductSection>
        </>
    )
}
export default FirstProduct