import {FaTrash, FaEdit} from 'react-icons/fa'
import { ProductContainer, ProductName } from './styles'
import { useProducts } from '../../contexts/ProductsContext'
import { useAuth } from '../../contexts/AuthContext'
import { useState } from 'react'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
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
            deleteProduct(product.id,token)
              MySwal.fire(
                'Deletado!',
                'O seu produto foi deletado.',
                'success'
              )
            }
          })
        }

    return (
        <section>
            <ModalEditProduct open={open} handleClose={handleClose}  product={product}/>
            <ProductName>{product.name}</ProductName>
            <ProductContainer>

                <div>
                    <p>{product.description}</p>
                </div>

                <div>
                    <p>R$ {product.price.toFixed(2).replace(".",",")}</p>
                </div>

                <div>
                    <button onClick={() => handleOpen()}><FaEdit/></button>
                    <button onClick={handleDelete}><FaTrash/></button>
                </div>
            </ProductContainer>
        </section>
    )
}

export default ProductEdit