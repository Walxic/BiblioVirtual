import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../hojas-de-estilo/Form.css";

function LoginForm() {
  const [estaLogueado, setEstaLogueado] = useState(false);
  const navigate = useNavigate();

  const manejadorLogueo = () => {
    // Reemplazar por la logica de logueo. Si uno le pone ingresar directamente, entra.
    setEstaLogueado(true);
  };

  if (estaLogueado) {
    navigate("./AplicacionTareas");
    return null;
  }

  return (
    <div className="container">
      <form className="form card">
        <h2 className="title"> Inicio de Sesión</h2>
        <div className="field">
          <input
            className="input-field"
            type="email"
            name="email"
            placeholder="Correo Electrónico"
          />
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm11.71 10.33c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 10.3l1.42-1.42 1.42 1.42c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.42-1.42 2.12-2.12c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-2.12 2.12-1.42-1.42a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l1.42 1.42-1.42 1.42a.996.996 0 0 0 0 1.41z" />
          </svg>
        </div>
        <div className="field">
          <input
            className="input-field"
            type="password"
            name="password"
            placeholder="Clave"
            viewBox="0 0 24 24"
          />
          <svg
            className="input-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
          </svg>
        </div>
        <div className="span">
          <Link className="btn-link" to="/recupero">
            Olvidaste tu contraseña?
          </Link>
        </div>
        <button className="btn" type="submit" onClick={manejadorLogueo}>
          Iniciar sesión
        </button>
        <div className="span">
          No tienes cuenta?{" "}
          <Link className="btn-link" to="/registro">
            Registrarse
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
