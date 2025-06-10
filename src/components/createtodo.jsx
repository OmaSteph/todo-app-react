import { useState } from "react";

function CreateTodo() {
    const [text, setText] = useState('')
     return (
        <>
            <h1 className="app-header">
                Todo App
            </h1>
            <input
                className="todo-input"
                type="text"
                placeholder="Enter a new todo"
                required
                value={text}
                onChange={(e) => {
                    console.log(e.target.value);
                    setText(e.target.value);
                }}
            />
            {/* <div className="flex">
                <Button>Add Todo</Button>
            </div> */}
        </>
  );
}

export default CreateTodo;