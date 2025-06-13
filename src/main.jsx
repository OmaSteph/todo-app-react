import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'

import Home from './pages/home.jsx'
import TaskDetails from './pages/TaskDetails'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/task-details/:id' element={<TaskDetails />} />
        </Routes>
      </QueryClientProvider>
    </StrictMode>
  </BrowserRouter>
)
