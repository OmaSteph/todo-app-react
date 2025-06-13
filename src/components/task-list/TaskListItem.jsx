import React, { useState } from 'react'
import { Link } from 'react-router'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { EllipsisVertical } from 'lucide-react'
import {
  DropdownMenu,
  // DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import EditModal from '@/components/modals/EditModal'
import DeleteModal from '@/components/modals/DeleteModal'

const TaskListItem = ({ task }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  return (
    <div className=' flex justify-between items-center gap-2.5 border-b border-b-[#000] py-4 last:border-none cursor-pointer'>
      <div className='flex items-center gap-3'>
        <Checkbox id={task.id} />
        <Label htmlFor={task.id}>{task.name}</Label>
      </div>
      <div className='flex items-center gap-3'>
        <DropdownMenu>
          <DropdownMenuTrigger className='cursor-pointer' asChild>
            <button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <EllipsisVertical />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>
              <Link to={`/task-details/${task.id}`}>View Details</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className='cursor-pointer'
              onClick={() => setIsEditModalOpen(true)}
            >
              <span>Edit Task</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className='cursor-pointer'
              onClick={() => setIsDeleteModalOpen(true)}
            >
              <span className='text-red-500'>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {isEditModalOpen && (
        <EditModal
          handleEdit={() => {
            console.log(`Deleting task with id: ${task.id}`)
            setIsEditModalOpen(false)
          }}
          handleClose={() => setIsEditModalOpen(false)}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          handleDelete={() => {
            console.log(`Deleting task with id: ${task.id}`)
            setIsDeleteModalOpen(false)
          }}
          handleClose={() => setIsDeleteModalOpen(false)}
        />
      )}
    </div>
  )
}

export default TaskListItem
