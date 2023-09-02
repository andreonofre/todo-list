import React from 'react'
import { useState } from 'react'

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);


    const handleSubmit = (event) => {
       event.preventDefault();

       //Passando o estado para o Wrapper
       editTodo(value, task.id);// Passando o que foi digitado ao clicar no botão 
      //console.log(value)
      setValue("");
    };
    
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" value={value} className='todo-input' placeholder='Edite a sua tarefa' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Edit Task</button>
    </form>
  );
};
export default EditTodoForm;