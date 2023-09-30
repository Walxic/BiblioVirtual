import React from 'react';
import { Link } from 'react-router-dom';
import '../hojas-de-estilo/recupero.css'; 

function RecuperarUsuario() {
  return (
    <div className="form1-box">
      <form className="form">
        <h2 className="title1">Recupera tu Usuario</h2>
        <div className="form-container">
          <input type="email" className="input" placeholder="Email" />
        </div>
        <button className="btn">Recuperar</button>
        Volver al login? <Link className='btn1' to="/">ir</Link>
      </form>
    </div>
  );
}

export default RecuperarUsuario;