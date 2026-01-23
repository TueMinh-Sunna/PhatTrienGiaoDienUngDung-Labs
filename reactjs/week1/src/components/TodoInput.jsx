import React from 'react'
import { useState } from 'react'

function TodoInput({addTodo}) {
    const [value, setValue] = useState("")

    const submit = (e) => {
        e.preventDefault()
        addTodo(value)
        setValue("")
    }
  return (
    <form onSubmit={submit}>
        <input 
            value={value}
            onChange={(e) => {
                setValue(e.target.value)
            }}
        />
        <button>Add</button>
    </form>
  )
}

export default TodoInput