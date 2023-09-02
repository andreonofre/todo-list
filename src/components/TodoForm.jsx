import React from 'react'
import { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");


    const handleSubmit = (event) => {
       event.preventDefault();

       //Passando o estado para o Wrapper
       if (value === "") {
        alert("Adicione alguma tarefa")
       } else {

         addTodo(value);// Passando o que foi digitado ao clicar no botão 
       };
      //console.log(value)
      setValue("");
    };
    
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" value={value} className='todo-input' placeholder='Qual a sua tarefa para Hoje?' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  );
};

export default TodoForm;