import { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { useHistory } from "react-router-dom"
import Illustration from '../Illustration/Illustration'
import { SignUpInfo, StyledAcess, StyledErro } from './styles'
import { useAuth } from '../../../contexts/AuthContext'
import { loginSchema } from '../../../Schemas/Login.schema'
import SignInForm from './LoginForm'


interface SignInData {
    email: string,
    password: string
}

const Login = () =>{

    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState("")
    const {signIn} = useAuth()

    const {
        register,
        formState:{ errors },
        handleSubmit
    } = useForm<SignInData>({
        resolver: yupResolver(loginSchema)
    })


    const handleSignIn: SubmitHandler<SignInData> = (data:SignInData) => {
        setLoading(true)
        signIn(data)
        .then(() => setLoading(false) )
        .catch(err => {
            setErro(err.response.data.message)
            setLoading(false)
        })
    }

    return(
        <StyledAcess>
            <SignUpInfo>
                <h1>Seja bem vindo de volta!</h1>
                <p>Bem vindo! Insira suas informações para prosseguir</p>
                {erro && <StyledErro>{erro}</StyledErro>}
                <SignInForm errors={errors} handleSignIn={handleSubmit(handleSignIn)} loading={loading} register={register}/>
            </SignUpInfo>

                <Illustration color='blue'/>

        </StyledAcess>
    )
}

export default Login