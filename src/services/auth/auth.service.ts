import axios from 'axios'

import type {
  LoginRequest,
  LoginResponse,
  RegisterUserRequest,
  RegisterUserResponse,
} from '../../api/auth'

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

export const registerUserService = async (
  userData: RegisterUserRequest,
): Promise<RegisterUserResponse> => {
  const response = await authEndpoint.post<RegisterUserResponse>(
    '/users/',
    userData,
  )
  return response.data
}
