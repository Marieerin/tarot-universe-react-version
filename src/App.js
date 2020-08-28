import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Stage from './stage'
import Candle from './candle';


class App extends Component {
  constructor() {
    super();
    this.state= {
    }
  }
  // features to add
  // on load prompt a motion sensativity option
  // add accessable "tab through" option

  render() {
    
    return (
      <div className="App">

        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        {/* <div id="stars4"></div> */}

        <Header />

        <Stage />

        <Candle />
      </div>
    )
  }
}

export default App;
