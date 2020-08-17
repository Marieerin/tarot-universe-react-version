import React, { Component } from 'react';
import ApiRequester from "./apiRequester";

class Stage extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    handleClick(e){
        console.log(e.target.className);
        if(e.target.className === "next") {
            // console.log(this.state.act);
        }
    }
    componentDidUpdate() {
        {
          console.log(this.state.fruit);
        }
    }
    // counter changes stage with press of nav button
    // append appropriate components to stage displaying start, card reading
    // if counter is 
    render(){
        return (
          <div>
              <ul>
                <ApiRequester />
                <ApiRequester />
                <ApiRequester />
              </ul>
            <button className="back" onClick={this.handleClick}>
              back
            </button>
            <button className="next" onClick={this.handleClick}>
              next
            </button>
          </div>
        );
    }
}

export default Stage;