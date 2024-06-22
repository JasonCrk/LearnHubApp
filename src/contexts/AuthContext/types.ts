import type { Dispatch } from 'react'

import type { AuthUser } from '../../models/auth'

export enum AuthActionKind {
  GET_AUTH_USER = 'GET_AUTH_USER',
  SET_TOKENS = 'SET_TOKENS',
  LOGOUT = 'LOGOUT',
  SET_USER = 'SET_USER',
}

export type AuthState = {
  isAuth: boolean
  accessToken: string | null
  refreshToken: string | null
  user: AuthUser | null
}

export type SetTokensAction = {
  type: AuthActionKind.SET_TOKENS
  payload: {
    accessToken: string
    refreshToken: string
  }
}

export type AuthAction = SetTokensAction

export type AuthContext = {
  authState: AuthState
  authDispatch: Dispatch<AuthAction>
}
