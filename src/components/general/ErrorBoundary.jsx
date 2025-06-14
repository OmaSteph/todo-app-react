import React from 'react'
import { Link, useRouteError } from 'react-router'

export function ErrorBoundary() {
  const error = useRouteError()

  let message = 'Sorry, an unexpected error has occurred.'
  if (error && error.statusText) {
    message = error.statusText
  } else if (error && error.message) {
    message = error.message
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4'>
      <div className='mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 mb-3.5 w-[100px] h-[100px]'>
        <svg
          className='text-red-600'
          width='50px'
          height='50px'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          aria-hidden='true'
          data-slot='icon'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'
          />
        </svg>
      </div>
      <h1 className='text-3xl font-bold mb-2 text-red-700 text-center'>
        Oops! Something went wrong.
      </h1>
      <p className='text-gray-600 mb-4 text-center'>
        {message}
        <br />
        Please try refreshing the page or go back to the home page.
      </p>
      <Link
        to='/'
        className='px-4 py-2 bg-black text-white rounded-md font-semibold shadow-xs hover:bg-black/85 transition cursor-pointer'
      >
        Go Home
      </Link>
    </div>
  )
}
