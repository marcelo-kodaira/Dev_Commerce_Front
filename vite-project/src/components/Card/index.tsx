import { useAuth } from "../../contexts/AuthContext"
import {CardContent, CardDescription, CardPrice, CardTitle, DetailsButton, StyledCard } from "./styles"
import { useProducts } from "../../contexts/ProductsContext"


interface Product{
    id: string
    name: string
    price: number
    description: string
}

interface CardProps{
    product: Product
}

const Card = ({product}:CardProps) =>{
    
    return(
        <StyledCard>
            <CardContent>
                <CardTitle>{product.name}</CardTitle>
                <CardPrice>R${product.price.toFixed(2)}</CardPrice>
                <CardDescription>Descrição: {product.description}</CardDescription>
                <DetailsButton>Detalhes</DetailsButton>
            </CardContent>
        </StyledCard>
    )
}

export default Card