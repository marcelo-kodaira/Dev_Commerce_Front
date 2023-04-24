import { useState } from 'react'
import { signUpSchema } from '../../../Schemas/SignUp.schema'
import { useForm, SubmitHandler } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import api from '../../../services/api'
import SignUpForm from './SignUpForm'
import Illustration from '../Illustration/Illustration'
import { SignUpInfo, StyledAcess, StyledErro } from './styles'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useHistory } from 'react-router-dom'


interface SignUpData {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

const SignUp = () =>{

    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState("")
    const MySwal = withReactContent(Swal);
    const history = useHistory()

    const {
        register,
        formState:{ errors },
        handleSubmit
    } = useForm<SignUpData>({
        resolver: yupResolver(signUpSchema)
    })

    const handleSingUp: SubmitHandler<SignUpData> = ({name,email,password}:SignUpData) => {
        setLoading(true)
        api.post("/users",{name,email,password})
        .then(_ => {
            setErro("")
            setLoading(false)
            MySwal.fire({
                title: 'Conta criada',
                text: "Faça Login agora mesmo!",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Fazer Login'
              }).then((result) => {
                if (result.isConfirmed) {
                    history.push('/')
                }
              })
        })
        .catch(err => {
            setErro(err.response.data.message)
            setLoading(false)
        })
    }

    return(
        <StyledAcess>
            <SignUpInfo>
                <h1>Faça parte da nossa comunidade!</h1>
                <p>Insira suas informações e crie a sua conta agora mesmo!</p>
                {erro && <StyledErro>{erro}</StyledErro>}
                <SignUpForm errors={errors} handleSignUp={handleSubmit(handleSingUp)} loading={loading} register={register}/>
            </SignUpInfo>
                <Illustration color='orange'/>
        </StyledAcess>
    )
}

export default SignUp