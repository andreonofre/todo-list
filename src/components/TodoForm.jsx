import React from 'react'
import { useState } from 'react'

const TodoForm = () => {
    const [value, setValue] = useState("");

    console.log(value)

    const handleSubmit = (event) => {
       event.preventDefault();

       console.log(value)
    };
    
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' placeholder='Qual a sua tarefa para Hoje?' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm