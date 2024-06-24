import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import type { LoginRequest } from '../../api/auth'

import { loginForm } from '../../validations/auth/loginForm'

export const useLoginForm = () => {
  return useForm<LoginRequest>({
    resolver: zodResolver(loginForm),
    defaultValues: {
      email: '',
      password: '',
    },
  })
}
