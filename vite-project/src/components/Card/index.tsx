import { useAuth } from "../../contexts/AuthContext"
import {CardContent, CardDescription, CardPrice, CardTitle, EditButton, StyledCard } from "./styles"
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
    
    const {token} = useAuth()
    const{deleteProduct} = useProducts()
    
    return(
        <StyledCard>
            <CardContent>
                <CardTitle>{product.name}</CardTitle>
                <CardPrice>R${product.price}</CardPrice>
                <CardDescription>Descrição: {product.description}</CardDescription>
                <EditButton>Detalhes</EditButton>
            </CardContent>
        </StyledCard>
    )
}

export default Card