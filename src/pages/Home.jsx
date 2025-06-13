import React from 'react'
import Filters from '@/components/general/Filters'
import TaskLists from '@/components/task-list'
import AddNewTask from '@/components/task-list/AddNewTask'

function Home() {
  const [tasks, setTasks] = React.useState([])
  const fetchTasks = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/'
      )
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setTasks(data)
    } catch (error) {
      console.error('Failed to fetch tasks:', error)
      return []
    }
  }

  React.useEffect(() => {
    fetchTasks()
  }, [])

  console.log('Tasks:', tasks)
  return (
    <>
      <main className='h-[100vh]'>
        <div className='max-w-[1200px] my-0 mx-auto pt-4 px-8 flex flex-col gap-3'>
          <div className='flex justify-center items-center'>
            <h1>TODO APP</h1>
          </div>
          <Filters />
          <TaskLists />
          <AddNewTask />
        </div>
      </main>
    </>
  )
}

export default Home
