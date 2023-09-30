import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './componentes/LoginForm';
import "./App.css";
import RegUsuario from './componentes/Registro';
import RecuperarUsuario from './componentes/Recupero';
import Acerca from './componentes/Acerca';
import Preguntas from './componentes/Preguntas';
import Contacto from './componentes/Contacto';
import AplicacionTareas from './componentes/AplicacionTareas'
import Resenas from './componentes/Resenas';


function App() {
  return (
    <Router>
       <div className="nav1">
        <div className="barnav">
        <nav>
          <ul>
            <li>
              <Link className="nav" to="/">Inicio</Link>
            </li>
            <li>
              <Link className="nav" to="/Acerca">Acerca de</Link>
            </li>
            <li>
              <Link className="nav" to="/preguntas">Preguntas Frecuentes</Link>
            </li>
            <li>
              <Link  className="nav" to="/contacto">Contacto</Link> 
            </li>
            <li>
              <Link  className="nav" to="/resenas">Reseñas</Link> 
            </li>
          </ul>
        </nav>
        </div>
        </div>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/registro" element={<RegUsuario />} />
          <Route path="/recupero" element={<RecuperarUsuario />} />
          <Route path="/Acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/preguntas" element={<Preguntas />} />
          <Route path='/AplicacionTareas' element={ <AplicacionTareas/> } />
          <Route path="/Resenas" element={<Resenas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;