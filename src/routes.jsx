import Home from './pages/Home'
import TaskDetails from './pages/TaskDetails'
import { ErrorBoundary } from '@/components/general/ErrorBoundary'

export const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/task-details/:id',
    element: <TaskDetails />,
    errorElement: <ErrorBoundary />
  }
]
