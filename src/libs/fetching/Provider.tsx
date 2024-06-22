import { ReactNode } from 'react'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const client = new QueryClient()

export function FetchingProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}
