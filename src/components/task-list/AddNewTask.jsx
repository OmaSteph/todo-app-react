import React from 'react'
import AddTaskModal from '@/components/modals/AddTaskModal'
import { useTaskMutations } from '@/hooks/useTaskMutations'

const AddNewTask = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const { addTaskMutation } = useTaskMutations()

  const handleSave = (newTask) => {
    addTaskMutation.mutate(
      { newTask },
      {
        onSuccess: () => setIsModalOpen(false)
      }
    )
  }

  return (
    <>
      <button
        className='w-[50px] h-[50px] cursor-pointer absolute bottom-[14px] right-[14px]'
        aria-label='Add new task'
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src='/icons/addbtnicon.png'
          alt='add-icon-button'
          className='w-full h-full'
          width={50}
          height={50}
        />
      </button>

      {isModalOpen && (
        <AddTaskModal
          isLoading={addTaskMutation.isPending}
          handleSave={handleSave}
          handleClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}

export default AddNewTask
