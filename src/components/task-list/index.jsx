import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import TaskListItem from './TaskListItem'

const TaskListItems = [
  {
    id: '1',
    name: 'Task 1',
    description: 'This is the first task description'
  },
  {
    id: '2',
    name: 'Task 2',
    description: 'This is the second task description'
  },
  {
    id: '3',
    name: 'Task 3',
    description: 'This is the third task description'
  },
  {
    id: '4',
    name: 'Task 4',
    description: 'This is the fourth task description'
  }
]

const TaskLists = () => {
  return (
    <div className='grid gap-3'>
      <div className='task-list grid gap-1.5'>
        {TaskListItems.map((task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </div>
      {/* <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href='#' />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#' isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href='#' />
          </PaginationItem>
        </PaginationContent>
      </Pagination> */}
    </div>
  )
}

export default TaskLists
