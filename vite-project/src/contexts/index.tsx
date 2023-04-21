
import { ReactNode } from "react"
import { AuthProvider } from "./AuthContext"
import { ProductProvider } from "./ProductsContext"

interface IAppProviderProps {
    children: ReactNode
}

export const AppProvider = ({children}:IAppProviderProps ) =>(

    <AuthProvider>
        <ProductProvider>
            {children}
        </ProductProvider>
    </AuthProvider>
)