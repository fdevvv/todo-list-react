import './TareaFormulario.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

let tareas = [];

function TareaFormulario(props) {

    const [input, setInput] = useState(' ');

    const manejarCambio = e => {
        setInput(e.target.value);
    };
    

    const manejarEnvio = e => {
        e.preventDefault();
        e.target.reset();
        setInput('')
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        };
        props.onSubmit(tareaNueva);
        tareas.push(tareaNueva);
        localStorage.setItem("tareas", JSON.stringify(tareas));
    };


    return (
        <form 
        className='tarea-formulario'
        onSubmit={manejarEnvio}>
            <input 
            className='tarea-input'
            type='text'
            placeholder='Escribe una tarea'
            name='texto'
            onChange={manejarCambio}
            />
            <button className='tarea-boton'>
                Agregar Tarea
                </button>
        </form>
    );
}

export default TareaFormulario;