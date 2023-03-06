import React from "react";
import '../styles/CreateTodoButton.css';

function CreateTodoButton(props) {

  const onClickButton = (msg) => {
    alert(msg);
  }

  return (

    <button 
      className="CreateTodoButton"
      onClick={() => onClickButton('Aqui se deberia abrir un modal')}
    >
      +
    </button>

  );
}


export { CreateTodoButton };