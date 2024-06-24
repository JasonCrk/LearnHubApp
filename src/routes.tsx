import { createBrowserRouter } from 'react-router-dom'

import { LoginPage, RegisterPage } from './pages/auth'

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
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
])
