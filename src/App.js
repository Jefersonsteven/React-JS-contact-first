
import React from "react";
import { Fragment } from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Llorar con cebolla', completed: false },
  { text: 'Comer cebolla cortada', completed: false }
]

function App(props) { 
  return (
    <Fragment>

    <TodoCounter />

    <TodoSearch />


    <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
      ))}
    </TodoList>


    <CreateTodoButton />

    </Fragment>
  );
}

export default App;
