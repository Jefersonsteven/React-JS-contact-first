
import React from "react";
import { AppUI } from "./AppUI"
import { useLocalStorage } from "../hooks/useLocalStorage";
// import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Llorar con cebolla', completed: false },
//   { text: 'Comer cebolla cortada', completed: false }
// ]



function App() {
  // !
  const [ 
    todos, 
    saveTodos,
    loading,
   ] = useLocalStorage('TODOS_V1', []);
  // !
  // * Estados de TodoSearch
  const [ searchValue, setSearchValue ] = React.useState('');
  // !
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
  // !
  // * contador de todo completed
  const completedTodosLength = searchedTodos.filter(todo => !!todo.completed).length;
  // * contador de todos los todos
  const totalTodos = todos.length;
  // !
  // * funcion de completar todos
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    if(newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = false;
    } else {
      newTodos[todoIndex].completed = true;
    }
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    saveTodos(newTodos);
  }
  // !
  // * funcion de eliminar todos
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    saveTodos(newTodos);
  }
  // !
  // * 
  // React.useEffect(() => {
  //   console.log('Has completado');
  // },[completedTodosLength])

  return (
    <AppUI 
      loading={loading}
      totalTodos={totalTodos}
      completedTodosLength={completedTodosLength}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
