import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './store/todoSlice'

const todosForm = () => {
    const dispatch = useDispatch("todo")
    const [input, setInput] = useState("")
    const onChange = (e) => {
        setInput(e.target.value)
    }
    const addTodos = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }
  return (
    <div>
        <input 
            type="text"
            value={input}
            onChange={onChange}
        />
        <button onClick={addTodos}>Add</button>
    </div>
  )
}

export default todosForm