import { createBrowserRouter } from 'react-router-dom'

import { LoginPage } from './pages/auth'

import { AuthLayout } from './layouts'

export const routes = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
])
