import { useNavigate } from 'react-router-dom'

import { useMutation } from '@tanstack/react-query'

import { registerUserService } from '../../services/auth'

import { useSnackbar } from 'notistack'

export const useRegisterUserMutation = () => {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  return useMutation({
    mutationFn: registerUserService,
    onSuccess: () => {
      enqueueSnackbar('Se le ha enviado un código de activación de cuenta', {
        variant: 'success',
      })
      navigate('/auth/login')
    },
  })
}
