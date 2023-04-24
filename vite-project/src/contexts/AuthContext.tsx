import { createContext, useContext, useCallback, useState, ReactNode } from 'react'
import api from '../services/api'

interface AuthProviderProps {
    children: ReactNode
}

interface User{
    id: string,
    name: string,
    email:string,
    password: string
}

interface signInCredentials{
    email: string,
    password: string
}

interface UserPatch {
    name?: string
    email?: string
    password?: string
}

interface AuthState {
    token: string,
    user: User
}

interface AuthContextData {
    user: User,
    token: string,
    signIn: (credentials: signInCredentials) => Promise<void>
    signOut: ()=> void
    updateUser: (data: UserPatch, userId: string, token:string) => Promise<void>
    deleteUser: (userId:string, token:string) => Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const useAuth = () =>{
    const context = useContext(AuthContext)

    if(!context){
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context
}

const AuthProvider = ({children}: AuthProviderProps) =>{


    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@SXB:token')
        const user = localStorage.getItem('@SXB:user')

        if(token && user){
            return {token, user: JSON.parse(user)}
        }

        return {} as AuthState
    })

    const signIn = useCallback(async ({email, password}:signInCredentials) =>{
        const response = await api.post('/login',{
            email,
            password
        })
        const {token,user} = response.data

        localStorage.setItem('@SXB:token', token)
        localStorage.setItem('@SXB:user', JSON.stringify(user))

        setData({token, user})
    },[])

    const signOut = useCallback(() =>{
        localStorage.removeItem('@SXB:token')
        localStorage.removeItem('@SXB:user')

        setData({} as AuthState)
    },[])

    const updateUser = useCallback(async(data: UserPatch, userId: string, token: string) =>{
        api.patch(`/users/${userId}`,data,{headers:{Authorization: `Bearer ${token}`}})
            .then(res =>{ 
                localStorage.setItem('@SXB:user', JSON.stringify(res.data))
            })
            .catch(err => {
                console.log(err)
            })
        },[]) 
  
  const deleteUser = useCallback(async(userId: string, token: string) =>{
    api.delete(`/users/${userId}`,{headers:{Authorization: `Bearer ${token}`}})
        .then(_ =>{ 
            localStorage.removeItem('@SXB:token')
            localStorage.removeItem('@SXB:user')
        })
        .catch(err => {
        console.error(err)
        })
    },[]) 


    return(
        <AuthContext.Provider value={{
            signIn,
            signOut,
            updateUser,
            deleteUser,
            token: data.token,
            user: data.user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, useAuth}