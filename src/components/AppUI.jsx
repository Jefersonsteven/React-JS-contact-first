
import React from "react";
import { Fragment } from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoContext } from "./TodoContext";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";



function AppUI() {
  const {error, loading, searchedTodos, completeTodo, deleteTodo, openModal} = React.useContext(TodoContext)

  return (
    <Fragment>

      <TodoCounter/>

      <TodoSearch/>

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

      {openModal === true && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton />

    </Fragment>
  )
}

export { AppUI };