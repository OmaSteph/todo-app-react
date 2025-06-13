import React from 'react'
import AddTaskModal from '@/components/modals/AddTaskModal'

const AddNewTask = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  return (
    <>
      <button
        className='w-[50px] h-[50px] cursor-pointer absolute bottom-[14px] right-[14px]'
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
          handleEdit={() => {
            // console.log(`Deleting task with id: ${task.id}`)
            setIsModalOpen(false)
          }}
          handleClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}

export default AddNewTask

// const [todos, setTodos] = useState([])
// const [showAddTaskModal, setShowAddTaskModal] = useState(false);

// import TodosContainer from './components/todoscontainer'
// import AddTaskModal from './components/addtaskmodal'

{
  /* <TodosContainer todos={todos} setTodos={setTodos} /> */
}

{
  /* 
    {showAddTaskModal && (
      <AddTaskModal
        onClose={() => setShowAddTaskModal(false)}
        onAdd={(setTask) => setTask([...task])}
      />
    )} */
}
