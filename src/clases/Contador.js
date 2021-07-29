import React, { Component } from 'react';

class Contador extends Component {
    constructor() {
        super();
        this.state = {
            valor: 0,
        }
    }

    incremento(){
        this.setState({
            valor: this.state.valor + 1
        })
    }
    decremento(){
        this.setState({
            valor: this.state.valor - 1
        })
    }

    render() {
        return(
            <div>
                <h2>{this.state.valor}</h2>
                <button onClick={ () => this.incremento()}> +1 </button>
                <button onClick={ () => this.decremento()}> -1 </button>
            </div>
        )
    }
}

export default Contador;