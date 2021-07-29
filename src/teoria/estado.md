##Estado

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
