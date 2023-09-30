import React from 'react';
import { Link } from 'react-router-dom';
import '../hojas-de-estilo/registro.css'

function RegUsuario() {  
  return (
    <div className="form-box">
      <form className="form">
        <h2 className="title">Registro para Nuevo Usuario</h2>
        <p className="subtitle">Crea una cuenta gratis con tu email.</p>
        <div className="form-container">
          <input type="text" className="input" placeholder="Nombre Completo" />
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="contraseña" />
        </div>
        <button className="btn">Registrarse</button>
      </form>
      <div className="form-section">
        ¿Tienes Cuenta? <Link to="/">inicia sesion</Link>
      </div>
    </div>
  );
}

export default RegUsuario;