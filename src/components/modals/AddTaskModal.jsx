import React, { useState } from 'react'
import { Loader2Icon } from 'lucide-react'

const AddTaskModal = ({ isLoading, handleSave, handleClose }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) {
      setError('Both fields are required.')
      return
    }
    setError('')
    handleSave({
      title: title.trim(),
      description: description.trim(),
      completed: false
    })
  }

  return (
    <div
      className='absolute z-10'
      aria-labelledby='dialog-title'
      role='dialog'
      aria-modal='true'
    >
      <div
        className='fixed inset-0 bg-gray-500/75 transition-opacity'
        aria-hidden='true'
      ></div>
      <form
        className='fixed inset-0 z-10 w-screen overflow-y-auto'
        onSubmit={onSubmit}
      >
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full sm:my-8 sm:w-full sm:max-w-lg'>
            <h3 id='dialog-title' className='uppercase text-center mt-5 px-4'>
              Add New Task
            </h3>
            <div className='flex flex-col gap-2 bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
              <div>
                <label
                  htmlFor='task-title'
                  className='block text-sm/6 font-medium text-gray-900'
                >
                  Task Title
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='task-title'
                    id='task-title'
                    placeholder='Enter task title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                  />
                </div>
              </div>

              <div>
                <div className='flex items-center justify-between'>
                  <label
                    htmlFor='task-description'
                    className='block text-sm/6 font-medium text-gray-900'
                  >
                    Task Description
                  </label>
                </div>
                <div className='mt-2'>
                  <textarea
                    name='task-description'
                    id='task-description'
                    placeholder='Enter task description'
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                  />
                </div>
              </div>

              {error && (
                <div className='text-red-500 text-sm mb-2'>{error}</div>
              )}
            </div>
            <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
              <button
                type='submit'
                disabled={isLoading}
                className='inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-black/85 sm:ml-3 sm:w-auto cursor-pointer'
              >
                {isLoading && <Loader2Icon className='animate-spin mr-1' />}
                {isLoading ? 'Saving...' : 'Save'}
              </button>
              <button
                type='button'
                className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto cursor-pointer'
                onClick={handleClose}
                disabled={isLoading}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddTaskModal
