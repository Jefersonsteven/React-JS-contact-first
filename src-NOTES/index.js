// * importamos rect
import React from 'react';
// * importamos react dom
import ReactDOM from 'react-dom/client';
// * importamos el css
import './index.css';
// * Este es un componente
import App from './App';

// * asignamos a una variable el tag con id root
// * que es el cual va a contener todo mi aplicación
const container = document.querySelector('#root');
// ! utilizamos el metodo createRoot de ReactDOM para crea una raiz dentro del nodo
// ! pasado por parametro
const root = ReactDOM.createRoot(container);

// ! utilizamos el metodo render
// * el metodo render lo usamos para indroducir un tag de JSX ("nodo React")
// * que este caso el el componente app que importamos
root.render(
  <App  emoticon="🤩" salute="Hey people!!"/>
);

