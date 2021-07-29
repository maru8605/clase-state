##Estado
En React el estado es uno de los conceptos más importantes que tenemos que manejar. Podemos entender al estado como el conjunto de propiedades, valores, y datos que algo (un componente, una aplicación, etc) contiene en un momento dado. El estado es lo que hace dinámica a una aplicación, es aquello que cambia: algo está en un estado, y pasa a estarlo en otro. Si no hay cambios de estado, es porque nada se modifica.

Todo aquello que cambie en un componente, o que pueda ser alterado mediante alguna acción o interacción, forma parte del estado de ese componente. Por ejemplo, en un botón que al hacer click cambia de color, se puede decir que pasa de un estado no clickeado a uno en el que sí lo está. Cualquier cosa que necesitemos modificar dentro de un componente tiene que ser parte de su estado (u del estado de otros, como ya veremos).

---

En un componente de clase, al estado podemos definirlo como una propiedad de clase.
Para esto, tenemos que crear una propiedad que se llame state. Esta propiedad tiene que ser un objeto, dentro del cual podemos crear distintas estados con sus valores.

    class Contador extends Component {
        constructor(){
            super();
            this.state = {
                valor: 0
            }
        }

    render() {
        return (
        <div>{cantidad}</div>
        )
    }

}
Si quisieramos modificar dicho estado, no podemos hacerlo directamente, ya que el estado en React es inmutable. Para esto, necesitamos utilizar el método setState. Este método se hereda de la clase React.Component, por lo tanto podemos accederlo mediante this.
setState tomar como argumento un objeto, donde tenemos que definir como propiedades aquellos estados que queremos manipular (no hace falta definir el resto) con el nuevo valor que deseamos que tenga. Por ejemplo:

class Contador extends React.Component {
constructor(){
super();
this.state = {
valor: 0
}
}

    incrementarCantidad = () => {
    this.setState({ cantidad: this.state.cantidad + 1 })
    }

    render() {
        return (
        <div>
            <button onClick={this.incrementarCantidad}>Incrementar</button>
            <div>{cantidad}</div>
        </div>
        )
    }

}

---

##Hooks
Los hooks son funciones que te permiten “enganchar” el estado de React y el ciclo de vida desde componentes funcionales. Los hooks no funcionan dentro de componentes de clases — te permiten usar React sin clases.

Existen varios hooks que son propios de React, y también podemos crear los nuestros, lo que nos permitirá reutilizar lógica y compartirla entre componentes.

useState

Todo hook comienza con el prefijo use-. Cuando agregamos una nueva librería, es común que esta contenga sus propios hooks, por lo que es fundamental aprender a utilizarlos para poder explotar todo el potencial de React y su ecosistema.

Reglas de Hooks
Los hooks tienen dos reglas muy sencillas:

Sólo pueden llamarse en componentes funcionales y otros hooks personalizados
Sólo pueden llamarse en el nivel superior de la función, es decir, no pueden usarse dentro de condicionales, bucles o funciones anidades. Esto permite que cuando un componente se rerenderiza, los hooks se ejecuten en el mismo orden que fueron declarados, y no se generen bugs o errores por ciertas condiciones no cumplidas.

---

##useState
Este hook nos permite acceder al estado en un componente funcional.

Deberias usas useState cada vez que tengas un componente y te des cuenta que algo en ese componente tiene que cambiar, dado un cierto evento o acción.

su sintaxis
useState es una función que devuelve un array. Este array contiene dos elementos que van de la mano:

un valor
una función que se utiliza para modificar dicho valor
La forma más común de declararla es aprovechando la posibilidad de desestructurar una array que nos ofrece JavaScript.

const [value, setValue] = useState()

Es importante entender que value, y setValue son nombres que ponemos nosotras, los elementos de un array no tienen nombres por defecto. Esto nos permite (y sí se puede) declarar muchos useState:

const [name, setName] = useState()
const [email, setEmail] = useState()
const [total, setTotal] = useState()
Cada una de las funciones sólo modicar el valor que tiene relacionado. Si bien podemos poner cualquier nombre, la convención es la siguiente:

un sustantivo para el primer elemento (el valor), que puede ser en singular, o plural si es un array
un verbo para el segundo elemento (la función), compuesto del prefijo set + el sustantivo que utilizamos para el primer elemento
Inicialmente el valor del primer elemento es undefined. Si queremos que tenga un valor inicial, tenemos que declararlo como argumento de useState, de la siguiente forma:

const [name, setName] = useState('Maru')
El valor puede ser cualquier valor válido en JavaScript (strings, números, booleanos, objetos, arrays).

Inmutabilidad
Otro concepto de suma importancia a la hora de trabajar con React y con estados, es el de inmutabilidad. Inmutable es aquello que no puede cambiar, que no puede ser alterado. En React el estado es inmutable. ¿Qué significa esto? Que no podemos modificar el estado. En ningún sentido: no podemos sumarle un número, ni cambiarle un valor, ni agregarle una letra, ni pushear un ítem a un array, ni modificar la propiedad de un objeto. Nada. Por ejemplo, no podemos hacer lo siguiente:

import React, { useState } from 'react'

const Counter = () => {
const [count, setCount] = useState(0)

const increaseCount = () => count = count + 1 //

return (
<button onClick={increaseCount}>{count}</button>
)
}
¿Cómo se concilia esto con que el estado de un componente cambia y es lo que permite que sea dinámico, si no podemos alterar o mutar el estado? La regla es que no podemos mutar el estado de un componente directamente. En el caso anterior, estamos modificando la variable count (definida con useState, es decir, una variable de estado) directamente, le estamos asignando un nuevo valor en el callback increaseCount.

Para hacerlo, tenemos que avisarle a React que queremos manipular el estado. Para esto, tenemos que usar la función que nos brinda useState, en este caso,setCount. Cuando llamamos a setCount,el valor que les pasemos como argumento es el valor con el que se actualizará la variable count, por ejemplo si llamamos a setCount(3), count pasará a tener el valor 3.

Por qué no puedo modificar el estado directamente?
Dos razones: coherencia y estabilidad.

coherencia: al tener el control de cuándo el estado cambia, React puede actualizar los componentes que corresponden en el momento dado. En cambio, tener cosas que cambian por fuera del control hace que React tenga que estar chequeando todo el tiempo todo para ver si cambió algo (en vez de ya saber qué tiene que cambiar), y que pueda haber un desfasaje entre cosas que cambiaron y todavía no se actualizaron.
perfomance: un array tiene una id que es lo que se conoce como referencia, que es la dirección en la que está guardado en la memoria. Si tenemos un array de 10000 items, React para saber si ese array fue modificado o no y actualizar el componente, tiene que recorrer los 10000 ítems y chequearlos con los valores anteriores, uno por uno. En cambio, si prohíbe hacer cambios a un array, la única forma de hacer un cambio es creando un array nuevo, por lo tanto, React sólo tiene que comparar la referencia de un array con el nuevo para saber si es el mismo array o no. Si no coinciden, es porque hubo algún cambio, y tiene que renderizar las cosas. Comparar una referencia es muchísimo más rápido que comparar todos los ítems uno por uno.
🛠️ ¿Cómo utilizarlo?
Para poder hacer uso de useState (y del resto de los hooks de React), tenemos que importarlos. Estos son exportados de forma nombrada dentro de la librería react, la misma que tenemos que declarar al principio de todo componente.

import React, { useState } from 'react'
Una vez que hacemos esto, podemos declararlo dentro de nuestro componente:

import React, { useState } from 'react'

const Counter = () => {

const [count, setCount] = useState(0)

const increaseCount = () => setCount(count + 1)

return (
<button onClick={increaseCount}>{count}</button>
)
}
Los pasos seguimos para utilizarlo son:

Importamos el hook useState
Invocamos el hook useState y desestructuramos los elementos del array que devuelve
El valor de dicho estado está guardado en la variable count
La función que permite modificar la variable count se llama setCount
Le damos a count un valor inicial de 0
El componente renderiza un botón
Dicho botón muestra como texto el valor de la variable count
Cuando se hace click en el botón, se ejecuta el callback increaseCount
La función increaseCount ejecuta a setCount, que modifica el valor de count sumándole uno
Al cambiar el valor de count, el componente se rerenderiza para mostrar el cambio
📄 Resumiendo
Todo aquello que puede cambiar en un componente, es parte del estado
useState es un hook que nos permite acceder al estado en un componente funcional
useState es un función que devuelve un array con dos elementos, un valor y una función para modificar dicho valor
Para acceder a dicho valor y función desestructuramos el array
Tanto al valor como a la función le podemos poner los nombres que queramos, por convención se usa un sustantivo para el valor y set + sustantivo para la función
El valor inicial del estado es undefined, podemos darle un valor inicial si le pasamos algún valor como argumento a useState
El estado es inmutable, es decir, jamás se modifica directamente
Para modificar un estado necesitamos usar la función que nos brinda useState, pasándole como argumento el nuevo valor que queremos que dicho estado tenga
Cuando el estado de un componente cambia, este se rerenderiza para mostrar el nuevo estado
