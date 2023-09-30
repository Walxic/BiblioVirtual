import React from 'react';
import '../hojas-de-estilo/Libro.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Libro({ id, titulo, terminado, terminarLibro, quitarLibro }) {
    return (
        <div className={terminado ? 'libro-contenedor terminado' : 'libro-contenedor'}>
            <div 
            className='libro-titulo'
            onClick={() => terminarLibro(id)}>
                {titulo}
            </div>
            <div 
            className='libro-contenedor-iconos'
            onClick={() => quitarLibro(id)}>
                <AiOutlineCloseCircle className='libro-icono' />
            </div>
        </div>
    );
}

export default Libro;