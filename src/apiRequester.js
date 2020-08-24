import React, { Component } from 'react';
import Modal from "./modal"
import response from "./response.json"
class ApiRequester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: "",
      cardDescription: "",
      cardType: "",
      cardNum: 0,
    };
  }
  // const apiRequester = (props) => {
  //   const allCards = [...props.cardData];
  //   let threeCards = allCards.splice(0, 3);
  //   if(props.threeCards){
  //     threeCards = [...props.threeCards];
  //   }
  // cardRandomizer() {
  //   // if click has happened random number selector runs
  //   const card = Math.floor(Math.random() * 78);
  //   // random number is sent to request cards in displayCards function
  //   this.displayCards(card);
  // }

  // const displayCards = threeCards.map((items, index) => {
  //   return (
  //     <li key={items.value_int} >

  //     </li>
  //   )
  // })
  displayCards(card) {
    // *****to be updated with an API call if one becomes available*****
    // state is updated to randomly selected card.
    // Name, Description, card number and type are all recorded

    this.setState({
      cardName: response.cards[card].name,
      cardDescription: response.cards[card].meaning_up,
      cardType: response.cards[card].type,
      cardNum: card,
      show: false,
    });
  }
  callingFunch(card) {
    console.log(response.cards[card].name);
        this.displayCards(this.props.card);

  }

  componentDidUpdate() {
    console.log("card", this.props.card);
    this.callingFunch(this.props.card);
  }
  componentDidMount() {
    // this.displayCards(this.props.cardNumber);
    // this.cardRandomizer();
  }
  // componentDidUpdate(){
  //   if (this.props.clicked != this.state.cardNum){
  //     this.displayCards(this.props.clicked)
  //   }
  // }
  showModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    if (this)
      return (
        // tense2 refers to the second google definition of tense
        // More specifically the origin of the word tense
        // Middle English (in the general sense ‘time’): from Old French tens, from Latin tempus ‘time’.
        <li className={`cardPlace ${this.props.tense2}`}>
          <span className="tense2">{this.props.tense2}</span>
          {/* images sourced from https://en.m.wikipedia.org/wiki/Rider-Waite_tarot_deck#/search */}
          <img src={require(`./assets/${this.state.cardNum}.jpg`)} />
          <h2>{this.state.cardName}</h2>
          <a
            onClick={(e) => {
              this.showModal();
            }}
          >
            learn more...
          </a>
          <Modal
            onClose={this.showModal}
            show={this.state.show}
            cardName={this.state.cardName}
            cardDescription={this.state.cardDescription}
            cardType={this.state.cardType}
          />
        </li>
      );
  }
};
export default ApiRequester;