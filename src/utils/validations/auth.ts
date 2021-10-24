import * as yup from 'yup'

export const fieldsValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required('O email é obrigatorio')
    .email('Digite um email válido'),
  password: yup
    .string()
    .required('A senha é obrigatoria')
    .min(6, 'A senha deve conter pelo menos 6 digitos')
})

export const fieldsChangePasswordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(6, 'A senha deve conter pelo menos 6 digitos'),
  confirmPassword: yup
    .string()
    .required('A confirmação de senha é obrigatória')
    .min(6, 'A confirmação de senha deve conter pelo menos 6 digitos')
    .oneOf([yup.ref('password'), null], 'As senhas não são iguais')
})
