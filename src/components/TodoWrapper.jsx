import React from "react";
import TodoForm from "./TodoForm.jsx";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo.jsx";
import EditTodoForm from "./EditTodoForm.jsx";

uuidv4(); // Incializando gerador de ID

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  //Recebendo tarefa no parametro e add no obj
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]); //Claonando estado atual e passando um obj novo
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo));
  };


  return (
    <div className="TodoWrapper">
      <h1>Adicione Tarefas</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask}  task={todo}/>
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
