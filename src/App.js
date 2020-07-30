import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Candle from './candle'

class App extends Component {
  constructor() {
    super();
    this.state= {

    }
  }
  render() {
    return (
      <div className="App">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Header />
        <Candle />
        {/* <div class="stage stage1">
          <span>stage1: Hey heres the description</span> */}
          {/* <!-- intro & first descripion --> */}
          {/* <!-- header big --> */}
          {/* <!-- start button --> */}
        {/* </div> */}
        {/* <div class="stage stage2">
          <span>
            stage2: Set the scene here's a little blurb that helps you get into
            the right mindset and think about what you're looking for
          </span> */}
          {/* <!-- header smaller -->
            <!-- set scene  -->
             */}
          {/* <div></div>
        </div>
        <div class="stage stage3">
          <span>stage3: descripion about </span> */}
          {/* <!-- pick 3 cards/ 3 cards layed out -->
            <!-- modal for each card -->
                <!-- modal had card title, picture, description -->
            <!-- modal  -->
            <!-- end button  --> */}
        {/* </div>
        <div class="stage stage4">
          <span>stage4 </span> */}
          {/* <!-- so mote it be --> */}
        {/* </div> */}
      </div>
    );
  }
}

export default App;
