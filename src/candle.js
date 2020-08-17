import React, { Component } from 'react';

class Candle extends Component {
    constructor(){
        super();
        this.state = {
            flame: false,
            blinkingGlow: 'blinking-glow',
            glow: 'glow',
            flame: 'flame',
        };
    }
    
    // handleCandle(){
    //     if(this.state.flame === true) {
    //         this.setState({
    //             blinkingGlow: "blinking-glow",
    //             glow: "glow",
    //             flame: "flame",
    //         });
    //     } else {
    //         this.setState({
    //             blinkingGlow: "",
    //             glow: "",
    //             flame: "",
    //         });
    //     }
    // }
    render() {
        return (
          <div>
            <div className="holder">
              {/* <!-- html/css for candle was taken and adapted from https://www.youtube.com/watch?v=W3HwYLZEoCI  --> */}
              <div className="candle">
                <div className={this.state.blinkingGlow} id="blinkingGlow"></div>
                <div className="thread"></div>
                <div className={this.state.glow} id="glow"></div>
                <div className={this.state.flame} id="flame"></div>
              </div>
            </div>
          </div>
        );
    }
}

export default Candle;