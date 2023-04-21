import { useState } from 'react'
import { signUpSchema } from '../Schemas/SignUp.schema'
import { useForm, SubmitHandler } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import api from '../../../services/api'
import { useHistory } from "react-router-dom"
import SignUpForm from './SignUpForm'


interface SignUpData {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

const SignUp = () =>{

    const [loading, setLoading] = useState(false)

    const {
        register,
        formState:{ errors },
        handleSubmit
    } = useForm<SignUpData>({
        resolver: yupResolver(signUpSchema)
    })



    const handleSingUp: SubmitHandler<SignUpData> = ({name,email,password,confirmPassword}:SignUpData) => {
        setLoading(true)
        api.post("/users",{name,email,password})
        .then(res => {
            console.log(res.data)
            setLoading(false)

        })
        .catch(err => {
            console.log(err)
            setLoading(false)

        })
    }


    const history = useHistory()

    return(
        <>
           <SignUpForm errors={errors} handleSignUp={handleSubmit(handleSingUp)} loading={loading} register={register}/>
        </>
    )
}

export default SignUp