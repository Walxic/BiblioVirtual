import React, { useState, useEffect } from 'react';

function Resenas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/resenas/api/resena/')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Tabla de Reseñas</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Reseña</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.titulo}</td>
              <td>{item.autor}</td>
              <td>{item.reseña}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Resenas;

/*import React from 'react';
import '../hojas-de-estilo/acerca.css';

function Reseña  () {
    return (
    <div className='contato'>
      <div className="bar">
      <div className="ball"></div>
      </div>
      <div className='area'>
       <h1>Aqui pronto podras ver reseñas</h1>
   </div>
   </div>
)
}
     
    
export default Reseña

import React, { Component, useEffect, useState } from 'react';

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch('http://localhost:8000/reseña/api/Reseña/')
      .then(response => response.json())
      .then(data => this.setState({ data }));
       console.log(data)
  }
 
  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>Datos desde Django</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.nombre}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;




/*import React from 'react';
import '../hojas-de-estilo/pregunta.css';
import { useEffect } from 'react';
import { getAllReseñas } from '../api/reseñas.api';

export function ReseñasList () {
    useEffect(() => {
        
      function loadReseña() {
        const res = getAllReseñas();
        console.log(res)
    }
    loadReseña();
});
    return (
    <div className='contato'>
      <div className="bar">
      <div className="ball"></div>
      </div>
      <div className='area'>
    <h1>
    
    </h1>
   </div>
   </div>
)
}
     
    
export default ReseñasList*/