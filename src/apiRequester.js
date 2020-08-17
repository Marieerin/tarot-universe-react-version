import React, { Component } from 'react';
import response from "./response.json"
class ApiRequester extends Component {
  constructor() {
    super();
    this.state = {
      cardName: "",
      cardDescription: "",
      cardType: "",
    };
  }
  cardRandomizer(){
    // if click has happened random number selector runs
    const card = Math.floor(Math.random() * 78)
    // random number is sent to request cards in displayCards function
    this.displayCards(card);
  }
  displayCards(card){
    // to be updated with an API call if one becomes available.

    // state is updated to randomly selected card.
    // Name, Description and type are all recorded
    this.setState({
      cardName: response.cards[card].name,
      cardDescription: response.cards[card].meaning_up,
      cardType: response.cards[card].type,
    });
  };
  componentDidMount(){
    this.cardRandomizer();
  };
  render() {
    return(
        <li className="cardPlace">
          <h2>{this.state.cardName}</h2>
          <span></span>
        </li>
    ) 
  }
};
export default ApiRequester;