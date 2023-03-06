
import React from "react";
import { Fragment } from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Llorar con cebolla', completed: false },
  { text: 'Comer cebolla cortada', completed: false }
]

function App() {
  // * Estados de TodoCounter
  const [todos, setTodos] = React.useState(defaultTodos);
  // * Estados de TodoSearch
  const [ searchValue, setSearchValue ] = React.useState('');
  // * Estados de Todo items
  // const [completed, setCompleted] = React.useState(false);

  let searchedTodos = [];
  // * filtrar todos por busqueda
  if(!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      
      return todoText.includes(searchText);
    })
  }

  // * contador de todo completed
  const completedTodosLength = searchedTodos.filter(todo => !!todo.completed).length;
  // * contador de todos los todos
  const totalTodos = todos.length;

  // * funcion de completar todos
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    if(newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = false;
    } else {
      newTodos[todoIndex].completed = true;
    }
    setTodos(newTodos);
  }

  // * funcion de eliminar todos
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <Fragment>

    <TodoCounter 
      total={totalTodos}
      completed={completedTodosLength}
    />

    <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />


    <TodoList>
      {searchedTodos.map(todo => (
        <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onCompleted={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </TodoList>


    <CreateTodoButton />

    </Fragment>
  );
}

export default App;
