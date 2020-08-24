import React, { Component } from 'react';
import ApiRequester from "./apiRequester";
import response from "./response.json";

class Stage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextAct: "cardTable",
      introBlurb: "visible",
      cardTable: "hidden",
      navText: "Go",
      data: [],
      threeCards: [],
      // past: 0,
      // present: 0,
      // future: 0
    };
  }
  componentDidMount() {
    const loadData = JSON.parse(JSON.stringify(response));
    this.setState({
      data: loadData.cards,
    });
    this.pickCards();
  }
  pickCards(arr, n){
    console.log('pickcards');
    let avail = [...Array(78).keys()]

    let result = new Array(3)
    n = 3
    while (n--) {
      let x = Math.floor(Math.random() * (avail.length - 1));
      result[n] = avail[x];
      avail.splice(x, 1) 
    }

    this.setState({
      threeCards: result,
    })
    console.log('threecards',this.state.threeCards);
  }

  // pickCards(arr, n){
  //   arr = this.state.data;
  //   n = 3;
  //   let result = new Array(n),
  //   len = arr.length,
  //   taken = new Array(len)

  //   while (n--) {
  //     let x = Math.floor(Math.random() * (len + 1));
  //     result[n] = arr[x in taken ? taken[x] : x];
  //     taken[x] = --len in taken ? taken[len] : len;
  //   }
  //   this.setState({
  //     threeCards: result,
  //   })
  //   console.log(this.state.threeCards);
  // }

  // randomCard () {
  //   const card = Math.floor(Math.random() * 78)
  //   console.log(card);
  //   return card
  // }
  handleClick(e) {
    this.pickCards();
    // const pastCard = this.randomCard(e);
    // const presentCard = this.randomCard(e);
    // const futureCard = this.randomCard(e);
    if (e.target.className === "cardTable") {
      // console.log(this.state.act);
      this.setState({
        nextAct: "introBlurb",
        introBlurb: "hidden",
        cardTable: "visible",
        navText: "Restart",
        // past: pastCard,
        // present: presentCard,
        // future: futureCard,
      });
    } else if (e.target.className === "introBlurb") {
      this.setState({
        nextAct: "cardTable",
        introBlurb: "visible",
        cardTable: "hidden",
        navText: "Go",
        // past: pastCard,
        // present: presentCard,
        // future: futureCard,
      });
    }
    // console.log(pastCard, presentCard, futureCard);
  }
  // nextAct controlls what part of the experience the user is viewing next.
  // currently there are 2 states nextAct can be in
  //1. cardTable -- pressing the button leads you to view cardTable block
  //2. introBlurb -- pressing the button leads you to view introBlurb block

  render() {
    return (
      <div className="stage">
        <div className={this.state.introBlurb} id="introBlurb">
          <span>i am the intro</span>
        </div>
        <ul className={this.state.cardTable} id="cardTable">
          <ApiRequester card={this.state.threeCards[2]}
            cardData={this.state.data}
            threeCards={this.state.threeCards}
          />
          {/* <ApiRequester tense2="past" />
          <ApiRequester tense2="present" />
          <ApiRequester tense2="future" /> */}
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