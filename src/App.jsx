import { useState } from 'react'
import './App.css'
import Header from './components/header'
import TodosContainer from './components/todoscontainer'
import AddTaskModal from './components/addtaskmodal'

function App() {

  const [todos, setTodos] = useState([]);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  return (
    <>
    <Header
      onNewTask={() => setShowAddTaskModal(true)}
    />

    <TodosContainer
      todos={todos}
      setTodos={setTodos}
    />


    {showAddTaskModal && (
      <AddTaskModal
        onClose={() => setShowAddTaskModal(false)}
        onAdd={(setTask) => setTask([...task])}
      />
    )}

    </>
  )
}

export default App
