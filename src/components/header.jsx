import { useState } from "react";

function Header(props) {
    const [selectedFilter, setSelectedFilter] = useState('ALL');
    const { tasks, onFilterChange } = props;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
     const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter); 
    setIsDropdownOpen(false);
  };
  
    return (
        <div className="w-3xl">
            <div className="head">
                <h1>TODO APP</h1>
                <div className="flex gap-4 items-center justify-between">
                    <div className="flex items-center justify-between border-2 rounded-lg text-blue w-xl p-1">
                            <input
                            type="search" 
                            id="search-task" 
                            name="q" 
                            placeholder="Search tasks"
                            />
                            <img className="w-4 h-4"
                            src="/icons/searchicon.png" alt="search icon" />
                    </div>
                    <div className="dropdown">
                        <button className="bg-blue" onClick={toggleDropdown}>
                            {selectedFilter}
                        </button>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                            <li onClick={() => handleFilterChange('All')}>All</li>
                            <li onClick={() => handleFilterChange('Complete')}>Complete</li>
                            <li onClick={() => handleFilterChange('Incomplete')}>Incomplete</li>
                            </ul>
                        )}
                    </div>
                    {/* <div className="toggle-mode">
                        <img src="/icons/togglemodeicon.png" alt="toggle mode" />
                    </div> */}
                </div>
            </div>

            <div className="body">
                <div className="w-128 flex flex-col justify-center">
                    <div className="flex items-center justify-between p-2.5 text-base">
                        <label className="flex items-center gap-2.5">
                            <input className="w-4 h-4"
                            type="checkbox" name="tasks" value="task1" />
                            Task 1
                        </label>
                        <div className="flex gap-2 w-3 h-3">
                            <img src="/icons/editicon.png" alt="edit icon" />
                            <img src="/icons/deleteicon.png" alt="delete icon" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-2.5 text-base">
                        <label className="flex items-center gap-2.5">
                            <input className="w-4 h-4"
                            type="checkbox" name="tasks" value="task2" />
                            Task 2
                        </label>
                        <div className="flex gap-2 w-3 h-3">
                            <img src="/icons/editicon.png" alt="edit icon" />
                            <img src="/icons/deleteicon.png" alt="delete icon" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-2.5 text-base">
                        <label className="flex items-center gap-2.5">
                            <input className="w-4 h-4"
                            type="checkbox" name="tasks" value="task3" />
                            Task 3
                        </label>
                        <div className="flex gap-2 w-3 h-3">
                            <img src="/icons/editicon.png" alt="edit icon" />
                            <img src="/icons/deleteicon.png" alt="delete icon" />
                        </div>
                    </div>
                </div>
                <div className="self-end">
                    <button id="add-btn">
                        <img 
                        src="/icons/addbtnicon.png" alt="add task" />
                    </button>
                </div>
            </div>
            </div>
    )
}

export default Header;