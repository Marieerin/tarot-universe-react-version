import React, { Component } from "react";

class Modal extends Component{

    onClose = () => {
        this.props.show = false;
    };
    render() {
        console.log(this.props.cardNum, 'num');
        /* guidance on how to create from https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6 */
        if(!this.props.show) {
            return null;
        }

        return (
          <div
            className="modal"
            onClick={(e) => {
              this.props.onClose(e);
            }}
          >
            <div className="modalImage">
              <img src={require(`./assets/${this.props.cardNum}.jpg`)} />
            </div>
            <div className="modalContent">
              <h3>{this.props.cardName}</h3>
              <span>Card Type</span>
              <p>{this.props.cardType} Archana</p>
              <span>Description</span>
              <p>{this.props.cardDescription}</p>
            </div>
          </div>
        );
    };
};
export default Modal; 