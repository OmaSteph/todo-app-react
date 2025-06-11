function TodosContainer({todos, index}) {
    return (
        <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    )
}

export default TodosContainer;