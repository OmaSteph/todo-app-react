import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App.jsx'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <QueryClientProvider client = {queryClient} >
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      </QueryClientProvider>
    </StrictMode>
  </BrowserRouter>
)
