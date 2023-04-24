
import { Skeleton } from "@mui/material"
import Card from "../../../components/Card"

interface Product{
    id: string,
    name: string,
    price: number,
    description: string,
}

interface ContactListProps{
    loading: boolean
    products: Product[]
}

const howMany = Array.from(Array(7).keys())

const ProductList = ({loading,products}:ContactListProps) =>{
    return(
        <>
        {
            loading? (
            howMany.map((num) =>(
                <Skeleton key={num} variant="rectangular" width={260} height={300}>
                    
                </Skeleton>
            ))
            ):
            products.map(product => <Card key={product.id} product={product}/>)
        }
        </>
    )
}

export default ProductList