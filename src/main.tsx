import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

import { FetchingProvider } from './libs/fetching/Provider'

import { AuthContextProvider } from './contexts/AuthContext'

import { CssBaseline } from '@mui/material'

import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FetchingProvider>
      <AuthContextProvider>
        <CssBaseline />
        <RouterProvider router={routes} />
      </AuthContextProvider>
    </FetchingProvider>
  </StrictMode>,
)
