import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
const queryClien =new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClien}>
    <React.StrictMode>
     <BrowserRouter>
      <App />
      </BrowserRouter>
    </React.StrictMode>,
  </QueryClientProvider>
)
