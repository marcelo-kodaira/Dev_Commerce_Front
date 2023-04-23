import * as yup from 'yup'

export const createProductSchema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    price: yup.number()
    .required('Campo obrigatório')
    .transform((value, originalValue) => value = +originalValue.replace(',', '.'))
    .moreThan(0, 'O preço precisa ser positivo')
    .typeError('Utilize apenas números')
    .max(999999.99, 'O preço deve ser menor que R$1.000.000,00'),
    description: yup.string().required('Campo obrigatório').max(80)
})
