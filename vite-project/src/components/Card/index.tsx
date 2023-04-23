import { useAuth } from "../../contexts/AuthContext"
import {CardContent, CardDescription, CardPrice, CardTitle, DetailsButton, StyledCard } from "./styles"
import { useProducts } from "../../contexts/ProductsContext"
import { useState } from "react"
import ModalProductDetails from "../Modal/ModalDetails"


interface Product{
    id: string
    name: string
    price: number
    description: string
}

interface CardProps{
    product: Product
}

const Card = ({product:product}:CardProps) =>{

    const {token} = useAuth()
    const {loadProductId, product: selectedProduct} = useProducts()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const viewDetails = () =>{
        loadProductId(product.id,token).then(_ => handleOpen())
    }
    
    return(
            
            <StyledCard>
                <ModalProductDetails open={open} handleClose={handleClose} product={selectedProduct} />
                <CardContent>
                    <CardTitle>{product.name}</CardTitle>
                    <CardPrice>R${product.price.toFixed(2).replace(".",",")}</CardPrice>
                    <CardDescription>{product.description}</CardDescription>
                    <DetailsButton onClick={() => viewDetails()}>Detalhes</DetailsButton>
                </CardContent>
            </StyledCard>
    )
}

export default Card