import React from 'react'
import TodoForm from './TodoForm.jsx';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo.jsx';

uuidv4()// Incializando gerador de ID


const TodoWrapper = () => {

  const [todos, setTodos] = useState([]);

  //Recebendo tarefa no parametro e add no obj
  const addTodo = (todo) => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]); //Claonando estado atual e passando um obj novo
    console.log(todos);
  };


  return (
  
    <div className='TodoWrapper' >
        <TodoForm addTodo={addTodo}/>
        <Todo />
    </div>
  )
}

export default TodoWrapper;