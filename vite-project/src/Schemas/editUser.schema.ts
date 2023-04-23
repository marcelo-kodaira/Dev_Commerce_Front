import * as yup from 'yup'

export const editUserSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email('Email inválido'),
    password: yup.string().required("Digite sua senha antiga ou atualize sua senha"),
    confirmPassword: yup.string().required("Confirme sua senha").oneOf([yup.ref('password')], "As senhas não são iguais."),
})