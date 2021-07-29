import {useState} from 'react'

const Count = () => {
    const [contador, actualizarContador] = useState(0);

    const incrementarContador = () => actualizarContador(contador + 1)

    const decrementarContador = () => actualizarContador(contador - 1)

    return (
        <div>
            <h2>Ahora soy el numero: {contador}</h2>
            <button onClick={incrementarContador}>+1</button>
            <button onClick={decrementarContador}>-1</button>
        </div>
    )
}

export default Count
