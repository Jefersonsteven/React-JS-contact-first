import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

// * creacteContext me entrega un array de dos posiciones
// * Una con !! Provider que es donde se encapsularan la props que quiero compartir
// * La otra es !! Consumer
const TodoContext = React.createContext();

function TodoProvider(props) {

  // * Estado del Modal
  const [openModal, setOpenModal] = useState(false);
  // !
  // 8 Lo todos se guardan en local storage
  const [
    todos,
    saveTodos,
    loading,
    error
  ] = useLocalStorage('TODOS_V1', []);
  // !
  // * Estados de TodoSearch
  const [searchValue, setSearchValue] = useState('');
  // !
  let searchedTodos = [];
  // * filtrar todos por busqueda
  if (!searchValue.length >= 1) {
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
  const completedTodos = searchedTodos.filter(todo => !!todo.completed).length;
  // * contador de todos los todos
  const totalTodos = todos.length;
  // !
  // * funcion de completar todos
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    if (newTodos[todoIndex].completed) {
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
  // * funcion de añadir todos
  function addTodos(value) {
    const newTodo = {
      text: value,
      completed: false
    }

    localStorage.setItem('TODOS_V1', JSON.stringify([ ...todos, newTodo ]))
    saveTodos([ ...todos, newTodo ]);
  }

  // * Aqui retornamos dentro una etiqueta escrita con el 
  // * primer elemento que me entrega createContext
  // * En la propiedad reservada value las props que quiero compartir
  return (
    <TodoContext.Provider value={{
      error,
      loading,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodos
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };