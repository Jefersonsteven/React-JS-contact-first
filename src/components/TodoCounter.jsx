import React from "react";
import '../styles/TodoCounter.css';


function TodoCounter({ total, completed }) {
  return (

    <h2 className="TodoCounter">Has completado {completed} de {total} Todos</h2>
    
  )
}

export { TodoCounter };