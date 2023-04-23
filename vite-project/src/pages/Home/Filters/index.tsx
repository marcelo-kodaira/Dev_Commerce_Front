import React from 'react'
import { useProducts } from '../../../contexts/ProductsContext'
import { StyledSelect } from './styles'

const Filters = () => {

  const {sortProducts} = useProducts()

  return (
    <>
      <span>Ordenar:</span>
      <StyledSelect onChange={(e) => sortProducts(e.target.value)}>
      <option>- - Escolha - -</option>
      <option value="name">Nome</option>
      <option value="lowestPrice">Preço crescente</option>
      <option value="highestPrice">Preço decrescente</option>
      </StyledSelect>
    </>
  )
}

export default Filters