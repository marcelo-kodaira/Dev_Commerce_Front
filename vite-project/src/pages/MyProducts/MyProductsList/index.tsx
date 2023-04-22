import { Skeleton } from "@mui/material"
import ProductEdit from "../../../components/ProductEdit"

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

const MyProductsList = ({loading,products}:ContactListProps) =>(
    <>
                <>
                <h1>Meus Produtos</h1>
                {
                    loading? (
                    howMany.map((num) =>(
                        <Skeleton key={num} variant="rectangular" width={500} height={30}>
                            
                        </Skeleton>
                    ))
                    ):
                    products.map(product => <ProductEdit key={product.id} product={product}/>)
                }
                </>
    </>
)

export default MyProductsList