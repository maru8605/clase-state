import React, { Component } from 'react';


class Hora extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    horaActual(){
        this.setState({
            date: new Date ()
        })
    }
  
    render() {
      return (
        <div>
          <h2>son las {this.state.date.toLocaleTimeString()}.</h2>
          <button onClick={() => this.horaActual()}>hora actual</button>
        </div>
      );
    }
  }
  
  export default Hora