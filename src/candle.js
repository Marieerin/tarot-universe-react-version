import React, { Component } from 'react';

class Candle extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render() {
        return (
          <div>
            <div class="holder">
              {/* <!-- html/css for candle was taken and adapted from https://www.youtube.com/watch?v=W3HwYLZEoCI  --> */}
              <div class="candle">
                <div class="blinking-glow"></div>
                <div class="thread"></div>
                <div class="glow"></div>
                <div class="flame"></div>
              </div>
            </div>
          </div>
        );
    }
}

export default Candle;