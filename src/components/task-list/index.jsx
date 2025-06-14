import React from 'react'
import TaskListItem from './TaskListItem'
import ListPagination from '@/components/general/Pagination'

const TaskLists = ({
  tasks,
  currentPage,
  setCurrentPage,
  handleEditModal,
  handleDeleteModal,
  onToggleComplete,
  updatingTaskId,
  isLoading
}) => {
  const tasksPerPage = 10
  const indexOfLastTask = currentPage * tasksPerPage
  const indexOfFirstTask = indexOfLastTask - tasksPerPage
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask)
  const totalPages = Math.ceil(tasks.length / tasksPerPage)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  if (isLoading) {
    return ( 
      <div className='text-center text-gray-400 py-8'>Loading tasks...</div>
    )
  }

  if (tasks.length === 0) {
    return (
      <div className='text-center text-gray-500 py-8'>
        No tasks found. Please add a new task.
      </div>
    )
  }

  return (
    <>
      <div className='grid gap-3 mt-2.5'>
        <div className='task-list grid gap-1.5 max-h-[66vh] overflow-auto'>
          {currentTasks.map((task) => (
            <TaskListItem
              key={task.id}
              task={task}
              handleEditModal={handleEditModal}
              handleDeleteModal={handleDeleteModal}
              onToggleComplete={onToggleComplete}
              isUpdating={updatingTaskId === task.id}
            />
          ))}
        </div>
        <ListPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={paginate}
        />
      </div>
    </>
  )
}

export default TaskLists
