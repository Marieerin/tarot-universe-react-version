import React, { Component } from 'react';
import ApiRequester from "./apiRequester";
import response from "./response.json";

class Stage extends Component {
  constructor(props) {
    super(props);

    const loadData = JSON.parse(JSON.stringify(response));

    this.state = {
      nextAct: "cardTable",
      introBlurb: "visible",
      cardTable: "hidden",
      navText: "Go",
      data: loadData.cards,
      threeCards: this.chooseThree(),
      past: "",
    };
  }
  componentDidMount() {
    // this.setState({
    //   data: loadData.cards,
    // });
  }
  componentDidUpdate() {
    
  }
  pickCards(n){
    
    // let card1 = result[0];
    // let card2 = result[1];
    // let card3 = result[2];
    // console.log(this.state.data[card1]);
    this.setState({
      threeCards: this.chooseThree(),
      // past: this.state.data[card1],
    });
    // console.log('threecards',this.state.threeCards);
  }
  chooseThree(n) {
    let avail = [...Array(78).keys()];

    let result = new Array(3);
    n = 3;
    while (n--) {
      let x = Math.floor(Math.random() * (avail.length - 1));
      result[n] = avail[x];
      avail.splice(x, 1);
    }

    return result
  }

  handleClick(e) {
    // this.pickCards();
    if (e.target.className === "cardTable") {
      this.pickCards();
      this.setState({
        nextAct: "introBlurb",
        introBlurb: "hidden",
        cardTable: "visible",
        navText: "Restart",
        past: this.state.data[this.state.threeCards[0]],
        // present: "presentCard",
        // future: "futureCard",
      });
    } else if (e.target.className === "introBlurb") {
      this.setState({
        nextAct: "cardTable",
        introBlurb: "visible",
        cardTable: "hidden",
        navText: "Go",
      });
    }
    // console.log(this.state.past);
  }
  // nextAct controlls what part of the experience the user is viewing next.
  // currently there are 2 states nextAct can be in
  //1. cardTable -- pressing the button leads you to view cardTable block
  //2. introBlurb -- pressing the button leads you to view introBlurb block

  render() {
    // console.log(this.state.past, 'this.state.past');
    return (
      <div className="stage">
        <div className={this.state.introBlurb} id="introBlurb">
          <span>i am the intro</span>
        </div>
        <ul className={this.state.cardTable} id="cardTable">
          <ApiRequester
            tense2="Past"
            card={this.state.data[`${this.state.threeCards[0]}`]}
            cardNum={this.state.threeCards[0]}
          />
          <ApiRequester
            tense2="Present"
            card={this.state.data[`${this.state.threeCards[1]}`]}
            cardNum={this.state.threeCards[1]}
          />
          <ApiRequester
            tense2="Future"
            card={this.state.data[`${this.state.threeCards[2]}`]}
            cardNum={this.state.threeCards[2]}
          />
        </ul>

        {/* I want to add this to all buttons & header https://joshwcomeau.com/react/animated-sparkles-in-react/ */}
        <button
          className={this.state.nextAct}
          onClick={(e) => {
            this.handleClick(e);
          }}
          id="navButton"
        >
          {this.state.navText}
        </button>
      </div>
    );
  }
}

export default Stage;