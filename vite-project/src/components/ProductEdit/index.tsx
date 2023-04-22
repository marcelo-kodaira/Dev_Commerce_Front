import React from 'react'
import {FaTrash, FaEdit} from 'react-icons/fa'
import { ProductContainer, ProductName } from './styles'

interface Product{
    id: string
    name: string
    price: number
    description: string
}

interface CardProps{
    product: Product
}

const ProductEdit = ({product}:CardProps) => {
  return (
    <section>
        <ProductName>{product.name}</ProductName>
        <ProductContainer>

            <div>
                <p>{product.description}</p>
            </div>

            <div>
                <p>{product.price}</p>
            </div>

            <div>
                <button><FaEdit/></button>
                <button><FaTrash/></button>
            </div>
        </ProductContainer>
    </section>
  )
}

export default ProductEdit