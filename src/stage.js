import React, { Component } from 'react';
import ApiRequester from "./apiRequester";

class Stage extends Component {
    constructor(props){
        super(props);
        this.state = {
          act: "cardTable",
          introBlurb: "visible",
          cardTable: "hidden"
        }
    }
    handleClick(e){
        console.log(e.target.className);
        if(e.target.className === "cardTable") {
          // console.log(this.state.act);
          this.setState({
            act: "introBlurb",
            introBlurb: "hidden",
            cardTable: "visible",
          })
        } else if (e.target.className === "introBlurb") {
          this.setState({
            act: "cardTable",
            introBlurb: "visible",
            cardTable: "hidden",
          });
        }
        console.log(this.state.act);
    }
    // counter changes stage with press of nav button
    // append appropriate components to stage displaying start, card reading
    // if counter is 
    render(){
        return (
          <div className="stage">
            <div className={this.state.introBlurb} id="introBlurb">
              <span>i am the intro</span>
            </div>
            <ul className={this.state.cardTable} id="cardTable">
              <ApiRequester tense2="past" />
              <ApiRequester tense2="present" />
              <ApiRequester tense2="future" />
            </ul>

            {/* <button className="back" onClick={this.handleClick}> */}
            {/* back
            </button> */}
            <div
              className={this.state.act}
              onClick={(e) => {
                this.handleClick(e);
              }}
            >
              next
            </div>
          </div>
        );
    }
}

export default Stage;