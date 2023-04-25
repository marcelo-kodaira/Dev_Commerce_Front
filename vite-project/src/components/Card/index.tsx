import { useAuth } from "../../contexts/AuthContext"
import {CardContent, CardDescription, CardPrice, CardTitle, DetailsButton, StyledCard } from "./styles"
import { useProducts } from "../../contexts/ProductsContext"
import { useState } from "react"
import ModalProductDetails from "../Modal/ModalDetails"
import { useHistory, useParams } from "react-router-dom"


interface Product{
    id: string
    name: string
    price: number
    description: string
}

interface RouteParams {
    id: string;
  }

interface CardProps{
    product: Product
}

const Card = ({product:product}:CardProps) =>{


    const history = useHistory()

    const handleOpen = () =>{
        history.push(`/home/${product.id}`);
    }

    return(
            <StyledCard>
                <CardContent>
                    <CardTitle>{product.name}</CardTitle>
                    <CardPrice>R${product.price.toFixed(2).replace(".",",")}</CardPrice>
                    <CardDescription>{product.description}</CardDescription>
                    <DetailsButton onClick={handleOpen}>Detalhes</DetailsButton>
                </CardContent>
            </StyledCard>
    )
}

export default Card