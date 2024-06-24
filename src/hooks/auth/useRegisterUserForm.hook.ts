import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  type RegisterUserFormFields,
  registerUserForm,
} from '../../validations/auth'

export const useRegisterUserForm = () => {
  return useForm<RegisterUserFormFields>({
    resolver: zodResolver(registerUserForm),
    defaultValues: {
      email: '',
      password: '',
      lastName: '',
      firstName: '',
      confirmPassword: '',
    },
  })
}
