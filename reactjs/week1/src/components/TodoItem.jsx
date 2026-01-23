import React from 'react'

function TodoItem({todo, deleteTodo}) {
  return (
    <li>
        {todo.text}
        <button
            onClick={() => deleteTodo(todo.id)}
        >x</button>
    </li>
  )
}

export default TodoItem