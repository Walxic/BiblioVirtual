import React from 'react';
import '../hojas-de-estilo/aplicacionTareas.css';
import ListaDeTareas from '../componentes/ListaDeTareas';

function AplicacionTareas() {
  return (
    <div className="aplicacion-tareas">
      <div className='contenedor-titulo'>
        <h1 className='titulo'>Gestor de Tareas</h1>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default AplicacionTareas;
