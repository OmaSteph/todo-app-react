export const filterSearchQuery = (query, tasks, statusFilter = 'all') => {
  let filtered = tasks

  if (statusFilter !== 'all') {
    filtered = filtered.filter((task) =>
      statusFilter === 'completed' ? task.completed : !task.completed
    )
  }

  if (query) {
    const multipleQueryKeyword = query.split(' ').filter((q) => q.trim() !== '')

    if (multipleQueryKeyword.length >= 1) {
      filtered = filtered.filter((task) =>
        multipleQueryKeyword.some((keyword) =>
          task.title.toLowerCase().includes(keyword.toLowerCase())
        )
      )
    }
  }

  return filtered
}
