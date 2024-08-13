import React from 'react'
import { useSelector } from 'react-redux';

const todos = () => {
    const todos = useSelector((state) => state.todo);
  const todo = [{text: "sample"}, {text: "sample"}, {text: "sample"}, {text: "sample"}, ]  
  return (
    <div>
        <ol>
            {todos.map((todo, key)=> <li key={key}>{todo}</li>)}
        </ol>
    </div>
  )
}

export default todos