import React, { Component } from "react";

class Modal extends Component{
    constructor(){
        super()
        this.state = {
            
        };
    }
    
    render() {
        /* guidance on how to create from https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6 */
        if(!this.props.show){
            return null;
        }
        return(
            <div className="modal">

                hellow modal
            </div>
        )
    }
}
export default Modal; 