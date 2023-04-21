import * as yup from 'yup'

export const signUpSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("Email é  obrigatório").email('Email inválido'),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup.string().required("Confirme sua senha").oneOf([yup.ref('password')], "As senhas não são iguais."),
})