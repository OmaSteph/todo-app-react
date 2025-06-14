import { useState, useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useTaskMutations } from '@/hooks/useTaskMutations'
import { fetchAllTasks } from '@/lib/apiCaller'
import { filterSearchQuery } from '@/lib/filterQuery'
import Filters from '@/components/general/Filters'
import TaskLists from '@/components/task-list'
import EditModal from '@/components/modals/EditModal'
import DeleteModal from '@/components/modals/DeleteModal'
import AddNewTask from '@/components/task-list/AddNewTask'

// import BuggyComponent from '@/components/general/BuggyComponent'

function Home() {
  const [selectedTask, setSelectedTask] = useState(null)
  const [statusFilter, setStatusFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [updatingTaskId, setUpdatingTaskId] = useState(null)

  const { data: tasks = [], isFetching, isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchAllTasks
  })

  const { updateTaskMutation, deleteTaskMutation } = useTaskMutations()

  const handleEditModal = useCallback((task) => {
    setSelectedTask(task)
    setIsEditModalOpen(true)
  }, [])

  const handleDeleteModal = useCallback((task) => {
    setSelectedTask(task)
    setIsDeleteModalOpen(true)
  }, [])

  const handleUpdateTask = useCallback(
    (updatedTask) => {
      updateTaskMutation.mutate(
        { id: updatedTask.id, updatedTask },
        {
          onSettled: () => setIsEditModalOpen(false)
        }
      )
    },
    [updateTaskMutation]
  )

  const handleDeleteTask = useCallback(
    (selectedTask) => {
      deleteTaskMutation.mutate(selectedTask.id, {
        onSettled: () => setIsDeleteModalOpen(false)
      })
    },
    [deleteTaskMutation]
  )

  const handleToggleComplete = useCallback(
    (task) => {
      setUpdatingTaskId(task.id)
      updateTaskMutation.mutate(
        {
          id: task.id,
          updatedTask: { ...task, completed: !task.completed }
        },
        {
          onSettled: () => setUpdatingTaskId(null)
        }
      )
    },
    [updateTaskMutation]
  )

  const filteredTasks = filterSearchQuery(searchQuery, tasks, statusFilter)

  return (
    <>
      {/* <BuggyComponent /> */}
      <main className='h-[100vh]'>
        <div className='max-w-[1200px] my-0 mx-auto pt-4 px-8 flex flex-col gap-3'>
          <div className='flex justify-center items-center'>
            <h1>TODO APP</h1>
          </div>
          <Filters
            query={searchQuery}
            filter={statusFilter}
            onQuerySearch={setSearchQuery}
            onFilterChange={setStatusFilter}
          />
            <TaskLists
              tasks={filteredTasks}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              handleEditModal={handleEditModal}
              handleDeleteModal={handleDeleteModal}
              onToggleComplete={handleToggleComplete}
              updatingTaskId={updatingTaskId}
              isLoading={ isFetching ||  isLoading }
            />
          <AddNewTask />
        </div>
      </main>

      {isEditModalOpen && selectedTask && (
        <EditModal
          task={selectedTask}
          isLoading={updateTaskMutation.isPending}
          handleUpdate={handleUpdateTask}
          handleClose={() => setIsEditModalOpen(false)}
        />
      )}
      {isDeleteModalOpen && selectedTask && (
        <DeleteModal
          task={selectedTask}
          isLoading={deleteTaskMutation.isPending}
          handleDelete={handleDeleteTask}
          handleClose={() => setIsDeleteModalOpen(false)}
        />
      )}
    </>
  )
}

export default Home
