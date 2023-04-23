import {FaTrash, FaEdit} from 'react-icons/fa'
import { ProductContainer, ProductName } from './styles'
import { useProducts } from '../../contexts/ProductsContext'
import { useAuth } from '../../contexts/AuthContext'
import { useState } from 'react'
import ModalCreateContact from '../Modal/ModalCreateProduct'
import ModalEditProduct from '../Modal/ModalEditProduct'

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

    const {deleteProduct} = useProducts()
    const {token} = useAuth()

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <section>
            <ModalEditProduct open={open} handleClose={handleClose} product={product} />
            <ProductName>{product.name}</ProductName>
            <ProductContainer>

                <div>
                    <p>{product.description}</p>
                </div>

                <div>
                    <p>R$ {product.price.toFixed(2)}</p>
                </div>

                <div>
                    <button onClick={() => handleOpen()}><FaEdit/></button>
                    <button onClick={() => deleteProduct(product.id,token)}><FaTrash/></button>
                </div>
            </ProductContainer>
        </section>
    )
}

export default ProductEdit