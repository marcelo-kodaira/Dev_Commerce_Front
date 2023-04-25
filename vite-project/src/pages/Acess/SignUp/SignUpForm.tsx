import {DeepMap, FieldError, FieldValues, UseFormRegister} from "react-hook-form"
import {SignUpButton, SignUpForms} from "./styles"
import { Input } from "../../../components/Input";
import { FaLock, FaUser, FaMailBulk } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";


interface SignUpData {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

interface SignUpFormProps {
    handleSignUp: () => void;
    errors: DeepMap<FieldValues, FieldError>
    register: UseFormRegister<SignUpData>
    loading: boolean
}

const SignUpForm = ({handleSignUp, errors, register, loading}: SignUpFormProps) =>(

    <SignUpForms onSubmit={handleSignUp}>

      <div>
      <Input label="Nome"  type="text" signUp={true} icon={FaUser} placeholder="Digite seu telefone" error={errors.name} {...register("name")}/>

      <Input label="Email"  type="email" signUp={true} icon={FaMailBulk} placeholder="Digite seu email" error={errors.email} {...register("email")}/>

      <Input label="Senha"  type="password" signUp={true} icon={FaLock} placeholder="Digite sua senha" error={errors.password} {...register("password")}/>

      <Input label="Confirme sua senha"  type="password" signUp={true} icon={FaLock} placeholder="Confirme sua senha" error={errors.confirmPassword} {...register("confirmPassword")}/>
      </div>


      <SignUpButton type="submit" disabled={loading}>{loading? <SpinnerDotted color="white" size={"30px"}/> : 'Cadastrar'}</SignUpButton>

      <p>Já tem uma conta? <Link to="/">Faça login</Link></p>

    </SignUpForms>
)

export default SignUpForm