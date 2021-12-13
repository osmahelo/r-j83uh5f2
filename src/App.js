import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(){
    super();
    this.Contador = this.Contador.bind(this);

    this.state ={
      arr:""
    }

  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" value={this.state.arr} onChange={this.Contador}></textarea>
        <div className="counter">{this.state.arr.length}</div>
      </div>
    );
  }
  Contador(e){
    this.setState({
      arr: e.target.value
    })

  }
}

export default App;
