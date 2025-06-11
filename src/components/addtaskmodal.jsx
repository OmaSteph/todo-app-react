import { useState } from "react";

function AddTaskModal({onClose, onAdd}) {
    const [task, setTask] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task || !desc) return;

    const onAdd = () => {
        if (task.trim() === '') return;
        setTodos([...todos, task]);
        setTask('');
        onClose;
    }
    };

    return (
    <div className="modal" onClick={(e) => e.target.classList.contains('modal') && onClose()}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>TODO APP</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task Title"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            minLength={6}
            maxLength={12}
            required
          />
          <input
            type="text"
            placeholder="Task Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            minLength={6}
            maxLength={30}
            required
          />
          <button type="submit" onClick={onAdd}>Add Task</button>
        </form>
      </div>
    </div>
    )
}

export default AddTaskModal;