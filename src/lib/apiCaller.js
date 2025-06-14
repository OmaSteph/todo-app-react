const baseUrl = 'https://jsonplaceholder.typicode.com/todos'

export const fetchAllTasks = async () => {
  const response = await fetch(baseUrl)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export const fetchTaskById = async (taskId) => {
  const response = await fetch(`${baseUrl}/${taskId}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export const createTask = async (newTask) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTask)
  })
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export const updateTaskById = async (taskId, updatedTask) => {
  const response = await fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedTask)
  })
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export const deleteTaskById = async (taskId) => {
  const response = await fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE'
  })
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}
