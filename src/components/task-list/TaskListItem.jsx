import React from 'react'
import { Link } from 'react-router'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { EllipsisVertical } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

const TaskListItem = React.memo(
  ({
    task,
    handleEditModal,
    handleDeleteModal,
    onToggleComplete,
    isUpdating
  }) => {
    return (
      <div className=' flex justify-between items-center gap-2.5 border-b border-b-[#000] py-4 last:border-none'>
        <div className='flex items-center gap-3'>
          <Checkbox
            id={task.id}
            checked={task.completed}
            disabled={isUpdating}
            onCheckedChange={() => onToggleComplete(task)}
          />
          <Label
            htmlFor={task.id}
            className={task.completed ? 'line-through text-gray-400' : ''}
          >
            {task.title}
          </Label>
        </div>
        <div className='flex items-center gap-3'>
          <DropdownMenu>
            <DropdownMenuTrigger className='cursor-pointer' asChild>
              <button
                variant='ghost'
                aria-label='Open task menu'
                className='h-8 w-8 p-0'
              >
                <span className='sr-only'>Open menu</span>
                <EllipsisVertical />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem>
                <Link to={`/task-details/${task.id}`}>View</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className='cursor-pointer'
                onClick={() => handleEditModal(task)}
              >
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className='cursor-pointer'
                onClick={() => handleDeleteModal(task)}
              >
                <span className='text-red-500'>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    )
  }
)

export default TaskListItem
