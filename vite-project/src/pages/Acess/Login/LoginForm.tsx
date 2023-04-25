import {DeepMap, FieldError, FieldValues, UseFormRegister} from "react-hook-form"
import {SignInButton, SignUpForms} from "./styles"
import { Input } from "../../../components/Input";
import {FaLock, FaMailBulk } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";


interface SignInData {
    email: string,
    password: string,
}

interface SignUpFormProps {
    handleSignIn: () => void;
    errors: DeepMap<FieldValues, FieldError>
    register: UseFormRegister<SignInData>
    loading: boolean
}

const SignInForm = ({handleSignIn, errors, register, loading}: SignUpFormProps) =>(

    <SignUpForms onSubmit={handleSignIn}>

      <div>
      <Input label="Email"  type="text" signUp={false} icon={FaMailBulk} placeholder="Digite seu email" error={errors.email} {...register("email")}/>

      <Input label="Senha"  type="password" signUp={false} icon={FaLock} placeholder="Digite sua senha" error={errors.password} {...register("password")}/>
      </div>

      <SignInButton type="submit">{loading? <SpinnerDotted color="white" size={"30px"}/> : 'Login'}</SignInButton>

      <p>Não tem uma conta? <Link to="/register">Crie sua conta</Link></p>

    </SignUpForms>
)

export default SignInForm