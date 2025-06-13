import React from 'react'
import { useParams, Link } from 'react-router'

const TaskDetails = () => {
  const [task, setTask] = React.useState([])
  let params = useParams()
  const id = params.id

  const fetchSingleTask = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      )
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setTask(data)
    } catch (error) {
      console.error('Failed to fetch tasks:', error)
      return []
    }
  }

  React.useEffect(() => {
    fetchSingleTask(id)
  }, [id])

  console.log('Task:', task)

  return (
    <main className='task-details'>
      <div className='max-w-[1200px] my-0 mx-auto py-4 px-8 flex flex-col gap-3'>
        <Link
          to='/'
          className='mb-4 cursor-pointer self-baseline p-1.5 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors'
        >
          Go back
        </Link>
        <div>
          <h1 className='mb-2'>Task Details</h1>
          <div className='flex flex-col gap-4'>
            <h2>
              <span className='font-bold'>Task Name:</span> TODO
            </h2>
            <p>
              <span className='font-bold'>Task Description:</span> Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Molestias esse eos
              commodi cupiditate delectus. Nemo, sunt? Praesentium corrupti
              eligendi aut aspernatur velit ea inventore enim aliquam.
              Voluptatem odit odio inventore!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
export default TaskDetails
