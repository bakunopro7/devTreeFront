import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import './index.css'
import Router from './router.tsx'

const queryClient = new QueryClient()
// query client provider habilita a nivel global
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <Router />
          <ReactQueryDevtools/>
      </QueryClientProvider>
  </StrictMode>,
)
