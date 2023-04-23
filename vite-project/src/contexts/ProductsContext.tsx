import { AxiosResponse } from "axios";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import api from "../services/api";

interface ProductProviderProps{
    children: ReactNode
}

interface ProductRequest{
    name: string
    price: number
    description: string
}

interface ProductResponse extends ProductRequest{
    id: string
}

interface ProductPatch{
    name?: string,
    price?: number,
    description?: string
}


type CreateProductResponse = { error?: string };

interface ProductContextData{
    products: ProductResponse[]
    notFound: boolean
    productNotFound: string
    createProduct: (data:ProductRequest, token: string) => Promise<CreateProductResponse | void>
    loadProducts: (token: string) => Promise<void>
    loadMyProducts: (token:string) => Promise<void>
    deleteProduct: (ProductId:string ,token: string) => Promise<void>
    updateProduct: (data:ProductPatch, ProductId: string, token:string) => Promise<void>
    searchProduct: (nome: string, token: string) => Promise<void>
    sortProducts: (sortBy: string) => void
}

const ProductContext = createContext<ProductContextData>({} as ProductContextData)

const useProducts = () =>{
    const context = useContext(ProductContext)

    if(!context){
        throw new Error('useProducts must be used within an ProductProvider')
    }
    return context
}

const ProductProvider = ({children}:ProductProviderProps) =>{
    const [products, setProducts] = useState<ProductResponse[]>([])
    const [notFound, setNotFound] = useState(false)
    const [productNotFound, setProductNotFound] = useState("")

    const loadProducts = useCallback(async (token:string) =>{
        try{
            const response = await api.get('/products',{
                
                headers: {
                    Authorization: `Bearer ${token}`
                }
            },)
            setProducts(response.data)
        }catch(err){
            
        }
    },[])

    const loadMyProducts = useCallback(async (token:string) =>{
        try{
            const response = await api.get('/products/user',{
                
                headers: {
                    Authorization: `Bearer ${token}`
                }
            },)
            setProducts(response.data)
        }catch(err){
            
        }
    },[])

    const createProduct = useCallback(async (data:ProductRequest,token:string) =>{
        
       await api.post('/products',data, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then((response: AxiosResponse<ProductResponse>) => {
            setProducts((oldProducts) => [...oldProducts, response.data]);
            return response;
          });
        
    },[])

    const deleteProduct = useCallback(async (productId: string, token:string)=>{
       await api.delete(`/products/${productId}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(_ => {
            const filteredProducts = products.filter(product => product.id !== productId)
            setProducts(filteredProducts)
        })
        .catch(err => console.log(err)) 
    },[products])

    const updateProduct = useCallback(async(data: ProductPatch, productId: string, token: string) =>{
       await api.patch(`products/${productId}`,data,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            const filteredProducts = products.filter(product => product.id !== productId)
            let product = products.find(product => product.id === productId)

            if(product){
                Object.assign(product, res.data);
                setProducts([...filteredProducts, product])
            }
        })
        .catch(err => console.log(err))
    },[products])

    const searchProduct = useCallback(async(nome: string, token: string) =>{
        api.get('/products',{
            headers:{
                Authorization: `Bearer ${token}`}
            }).then(res => {
                const itens = res.data
                const filteredItens = itens.filter((product:ProductResponse) =>{
                    const regex = new RegExp(nome, 'i');
                    return regex.test(product.name);
                 })

                if(nome === ""){
                    setProducts(itens)
                    return setNotFound(false)
                }

                if(filteredItens.length === 0){
                    setProductNotFound(nome)
                    return setNotFound(true)
                }
                    setNotFound(false)
                    setProducts(filteredItens)
                
            })
    },[products])

    const sortProducts = useCallback((sortBy:string) => {
        let sortedProducts = [...products];
        if (sortBy === 'name') {
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'lowestPrice') {
          sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'highestPrice') {
          sortedProducts.sort((a, b) => b.price - a.price);
        }
        setProducts(sortedProducts);
      }, [products]);

    return(
        <ProductContext.Provider value={{
            products,
            notFound,
            productNotFound,
            createProduct,
            loadProducts,
            loadMyProducts,
            deleteProduct,
            updateProduct,
            searchProduct,
            sortProducts
            }}>
            {children}
        </ProductContext.Provider>
    )
}

export {useProducts, ProductProvider}