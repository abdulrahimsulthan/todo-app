import { useState } from 'react'
import './App.css'
import Todo from './todos'
import TodoForm from './todosForm'


function App() {
  const [count, setCount] = useState(0)

  return (  
    <div className=''>
      <div className='flex justify-center'>
        <h1>Todo App</h1>
      </div>
      <div className='flex justify-center'>
        <TodoForm/>
      </div>
      <div className='flex justify-center'>
        <Todo/>
      </div>
      
    </div>
  )
}

export default App
