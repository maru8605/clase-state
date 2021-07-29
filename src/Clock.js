import { useState } from "react";
import React from 'react'

const Clock = () => {
    const [hora, actualizarHora] = useState(new Date())

    const horaActual = () =>{ 
        actualizarHora(new Date()) 
     }

   
    return (
        <div>
           <h2>La hora actual es: {hora.toLocaleTimeString()}</h2> 
           <button onClick={horaActual}>Click me!</button>
        </div>
    )
}

export default Clock
