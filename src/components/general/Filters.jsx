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
  { value: 'completed', label: 'Completed' },
  { value: 'pending', label: 'Pending' }
]

const Filters = ({ query, filter, onQuerySearch, onFilterChange }) => {
  return (
    <div className='search-filter__inputs flex justify-center items-center gap-4'>
      <Input
        type='text'
        placeholder='Search'
        value={query}
        onChange={(e) => onQuerySearch(e.target.value)}
      />
      <Select value={filter} onValueChange={onFilterChange}>
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
