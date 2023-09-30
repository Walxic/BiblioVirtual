import React, { useState } from "react";
import LibroFormulario from "./LibroFormulario";
import Libro from "./Libro";
import '../hojas-de-estilo/ListaDeLibros.css';

function ListaDeLibros() {

    const [libros, setLibros] = useState([]);
    
    const agregarLibro = libro => {
        console.log(libro);
        if (libro.titulo.trim()) {
            libro.titulo = libro.titulo.trim();
            const librosActualizados = [libro, ...libros];
            setLibros(librosActualizados);
        }
    };

    const quitarLibro = id => {
        const librosActualizados = libros.filter(libro => libro.id !== id);
        setLibros(librosActualizados);
    };

    const terminarLibro = id => {
        const librosActualizados = libros.map(libro => {
            if (libro.id === id) {
                libro.terminado = !libro.terminado;
            }

            return libro;
        });
        setLibros(librosActualizados);
    };

    return (
        <>
            <LibroFormulario onSubmit={agregarLibro}/>
            <div className="libros-lista-contenedor">
                {
                    libros.map((libro) => 
                    <Libro
                    key={libro.id}
                    id={libro.id} 
                    titulo={libro.titulo}
                    terminado={libro.terminado}
                    terminarLibro={terminarLibro}
                    quitarLibro={quitarLibro} />
                    )
                }
            </div>
        </>
    );
}

export default ListaDeLibros