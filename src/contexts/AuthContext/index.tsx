import { ReactNode, createContext, useReducer } from 'react'

import type { AuthContext, AuthState } from './types'
import { authReducer } from './reducer'

export const initialState: AuthState = {
  isAuth: false,
  user: null,
  accessToken: null,
  refreshToken: null,
}

export const authContext = createContext<AuthContext>({
  authState: initialState,
  authDispatch: () => {},
})

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  return (
    <authContext.Provider value={{ authState: state, authDispatch: dispatch }}>
      {children}
    </authContext.Provider>
  )
}
