import React, { Component } from "react";

class Modal extends Component{
    constructor(){
        super()
        this.state = {
            
        };
    }
    onClose = e => {
        this.props.show = false;
    }
    render() {
        /* guidance on how to create from https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6 */
        if(!this.props.show){
            return null;
        }
        return(
            <div className="modal"
            >
                hellow modal
                <button onClick={(e) => {this.props.onClose(e);
                }}>
                    Close
                </button>
            </div>
        )
    }
}
export default Modal; 