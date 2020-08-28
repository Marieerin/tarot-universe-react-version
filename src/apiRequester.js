import React, { Component } from 'react';
import Modal from "./modal"
class ApiRequester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "",
    };
  }

  showModal = () => {
    this.setState({
      show: !this.state.show,
    });
  }
  render() {
      return (
        // tense2 refers to the second google definition of tense
        // More specifically the origin of the word tense
        // Middle English (in the general sense ‘time’): from Old French tens, from Latin tempus ‘time’.
        <li className={`${this.props.tense2}`}>
          <div className="cardPlace">
            <span className="tense2">{this.props.tense2}</span>
            {/* images sourced from https://en.m.wikipedia.org/wiki/Rider-Waite_tarot_deck#/search */}
            <img onClick={() => {
                this.showModal();
              }} src={require(`./assets/${this.props.cardNum}.jpg`)} />
            <h2>{this.props.card.name}</h2>
            <a
              onClick={() => {
                this.showModal();
              }}
            >
              learn more...
            </a>
            <Modal
              onClose={this.showModal}
              show={this.state.show}
              cardNum={this.props.cardNum}
              cardName={this.props.card.name}
              cardDescription={this.props.card.meaning_up}
              cardType={this.props.card.type}
            />
          </div>
        </li>
      )
  }
};
export default ApiRequester;