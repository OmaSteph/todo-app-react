import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTask, updateTaskById, deleteTaskById } from '@/lib/apiCaller'

export function useTaskMutations() {
  const queryClient = useQueryClient()

  const addTaskMutation = useMutation({
    mutationFn: ({ newTask }) => createTask(newTask),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
    onError: (error) => {
      console.error('Error adding task:', error)
    }
  })

  const updateTaskMutation = useMutation({
    mutationFn: ({ id, updatedTask }) => updateTaskById(id, updatedTask),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
    onError: (error) => {
      console.error('Error updating task:', error)
    }
  })

  const deleteTaskMutation = useMutation({
    mutationFn: (id) => deleteTaskById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
    onError: (error) => {
      console.error('Error deleting task:', error)
    }
  })

  return { addTaskMutation, updateTaskMutation, deleteTaskMutation }
}
