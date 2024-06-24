import { useNavigate } from 'react-router-dom'

import { useMutation } from '@tanstack/react-query'

import { AuthActionKind } from '../../contexts/AuthContext/types'

import { useAuthContext } from './'

import { loginService } from '../../services/auth'

export const useLoginMutation = () => {
  const navigate = useNavigate()
  const { authDispatch } = useAuthContext()

  return useMutation({
    mutationFn: loginService,
    onSuccess: ({ access, refresh }) => {
      authDispatch({
        type: AuthActionKind.SET_TOKENS,
        payload: { refreshToken: refresh, accessToken: access },
      })
      navigate('/')
    },
  })
}
