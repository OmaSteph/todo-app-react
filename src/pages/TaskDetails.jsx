import React from 'react'
import { useParams, Link } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { fetchTaskById } from '@/lib/apiCaller'

const TaskDetails = () => {
  const { id } = useParams()

  const {
    data: task,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['task', id],
    queryFn: () => fetchTaskById(id),
    enabled: !!id
  })

  return (
    <main className='task-details min-h-screen bg-gray-50'>
      <div className='max-w-[600px] my-0 mx-auto py-8 px-6 flex flex-col gap-6'>
        <Link
          to='/'
          className='mb-4 cursor-pointer self-baseline p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors'
        >
          &larr; Go back
        </Link>
        <div className='bg-white rounded-lg shadow-md p-6'>
          <h1 className='text-2xl font-bold mb-4 text-gray-900'>
            Task Details
          </h1>
          {isLoading && (
            <div className='text-center text-gray-500 py-8'>Loading...</div>
          )}
          {isError && (
            <div className='text-center text-red-500 py-8'>
              Error: {error?.message || 'Could not fetch task.'}
            </div>
          )}
          {task && (
            <div className='flex flex-col gap-4'>
              <div>
                <span className='font-semibold text-gray-700'>Task Name:</span>
                <span className='ml-2 text-gray-900'>
                  {task.title || 'No title'}
                </span>
              </div>
              <div>
                <span className='font-semibold text-gray-700'>
                  Task Description:
                </span>
                <span className='ml-2 text-gray-900'>
                  {task.description || 'No description'}
                </span>
              </div>
              <div>
                <span className='font-semibold text-gray-700'>Status:</span>
                <span
                  className={`ml-2 px-2 py-1 rounded text-xs font-semibold uppercase
                  ${
                    task.completed
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {task.completed ? 'Completed' : 'Pending'}
                </span>
              </div>
              <div>
                <span className='font-semibold text-gray-700'>Task ID:</span>
                <span className='ml-2 text-gray-500'>{task.id}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default TaskDetails
