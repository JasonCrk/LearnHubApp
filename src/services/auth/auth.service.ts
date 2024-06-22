import axios from 'axios'

import type { LoginRequest, LoginResponse } from '../../api/auth'

export const authEndpoint = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/auth',
})

export const loginService = async (
  credentials: LoginRequest,
): Promise<LoginResponse> => {
  const response = await authEndpoint.post<LoginResponse>(
    '/jwt/create/',
    credentials,
  )
  return response.data
}
