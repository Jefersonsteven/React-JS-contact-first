// * importamos el logo
import logo from './logo.svg';
// * importamos el css
import './App.css';

// * una etiqueta en JSX el lo mismo que un elemento javascript que se veria asi:
// * usamos el metodo createElement que rec=sibe por tres parametros
// * el tag, {los atributos} y el contenido.
// * React.createElement('div', { class: App }, 'Hey people!')

// ! Esto es un componente de esta manera se escribe, dentro de una funcion.
// * Por conviccion se escribe un componente como Capitalize
function App(props) { // ! la funcion puede recibir parametros lo cual llamaremos propiedades
  // * Nuestra funcion retorna entre parentesis el JSX 
  // * ("Babel hace que se parezca mucho al HTML")
  // ! podemos utilizar variables de esta forma dentro de JSX "miVariable".
  // ! entre corchetes
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.salute} {props.emoticon}
        </a>
      </header>
    </div>
  );
}

export default App;
