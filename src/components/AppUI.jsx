
import { Fragment } from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";


function AppUI({
  loading,
  error,
  totalTodos,
  completedTodosLength,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}) {

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
      {error && <p>Oh no ERROR!!</p>}
      {loading && <p>Loading... wait</p>}
      {!loading && !searchedTodos.length && <p>Create your first Todo</p>}

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
  )
}

export { AppUI };