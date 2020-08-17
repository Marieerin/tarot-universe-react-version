import React, { Component } from 'react';
// import axios from "axios";
import './App.css';
import Stage from './stage'

import Header from './Header';
import Candle from './candle';

class App extends Component {
  constructor() {
    super();
    this.state= {
      act: 3,
    }
  }
  render() {
    return (
      <div className="App">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
        <Header />
        <div className="stage">
          <Stage />
        </div>

        <Candle />
      </div>
    );
  }
  
}

export default App;
