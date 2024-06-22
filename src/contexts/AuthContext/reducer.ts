import { AuthAction, AuthState, AuthActionKind } from './types'

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case AuthActionKind.SET_TOKENS:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isAuth: true,
      }
    default:
      return state
  }
}
