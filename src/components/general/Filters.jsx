import React from 'react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const filterData = [
  { value: 'all', label: 'All Status' },
  { value: 'done', label: 'Done' },
  { value: 'todo', label: 'Todo' }
]

const Filters = () => {
  return (
    <div className='search-filter__inputs flex justify-center items-center gap-4'>
      <Input type='email' placeholder='Search' />
      <Select>
        <SelectTrigger className='w-[150px]'>
          <SelectValue placeholder='Filters' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Filters by Status</SelectLabel>
            {filterData.map((filter) => (
              <SelectItem key={filter.value} value={filter.value}>
                {filter.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default Filters
