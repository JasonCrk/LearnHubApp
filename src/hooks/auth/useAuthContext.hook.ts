import { useContext } from 'react'

import { authContext } from '../../contexts/AuthContext'

export const useAuthContext = () => {
  const context = useContext(authContext)

  if (!context) {
    throw new Error('Could not find authentication context')
  }

  return context
}
