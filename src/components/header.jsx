import { useState } from "react";

function Header({onNewTask}) {
  
    return (
            <div className="head">
                <h1>TODO APP</h1>
                <div>
                    <button id="add-btn" onClick={onNewTask}> 
                        Add Task
                    </button>
                </div>
            </div>
    )
}

export default Header;