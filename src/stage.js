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
    // counter changes stage with press of nav button
    // append appropriate components to stage displaying start, card reading
    // if counter is 
    render(){
        return (
          <div className="stage">
            <div className="act" id="introBlurb">
              <span></span>
            </div>
            <ul className="act" id="cardTable">
              <ApiRequester tense2="past" />
              <ApiRequester tense2="present" />
              <ApiRequester tense2="future" />
            </ul>

            {/* <button className="back" onClick={this.handleClick}> */}
            {/* back
            </button> */}
            <div className="next" onClick={this.handleClick}>
              next
            </div>
          </div>
        );
    }
}

export default Stage;