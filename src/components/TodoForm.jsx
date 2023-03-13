import React, { useContext, useState } from "react";
import '../styles/TodoForm.css';
import { TodoContext } from "./TodoContext";

function TodoForm() {
  const { addTodos, setOpenModal } = useContext(TodoContext);
  const [ newTodo, setNewTodo ] = useState('');

  function handleTextArea(event){
    const text = event.target.value;
    setNewTodo(text);
  }

  function onCancel(){
    setOpenModal(false);
  }

  function onAdd(event){
    if(newTodo !== '') {
      addTodos(newTodo);
      setOpenModal(false);
    }
    event.preventDefault();
  }

  return (
    <form onSubmit={onAdd}>
      <label htmlFor="">
        <textarea
          onChange={handleTextArea}
          name=""
          id=""
          cols="30"
          rows="3"
          placeholder="Add your todo!!"
          value={newTodo}
          >
        </textarea>
        <div className="TodoForm-buttonContainer">
          <button 
            className="TodoForm-button TodoForm-button--cancel"  
            onClick={onCancel}>Cancel
          </button>
          <button 
            className="TodoForm-button TodoForm-button--add"
            type="submit"
          >
            Add
          </button>
        </div>
      </label>
    </form>
  )
}

export { TodoForm }