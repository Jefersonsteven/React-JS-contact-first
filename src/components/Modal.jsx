import { useContext } from "react";
import ReactDOM from "react-dom";
import '../styles/Modal.css';


function Modal({ children }) {

  return ReactDOM.createPortal(
    <div className="Modal">
      {children}
    </div>,
    document.querySelector('#modal')
  )
}

export { Modal };