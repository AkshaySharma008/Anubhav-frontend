import React from 'react';
import { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import "./index.scss"

export default class FeedbackModal extends Component {
    state = {
        iconClass: "far",

    }

    onClickHandler = () => {
        this.setState({iconClass: "fa fas"})
    }

render() { 
    return (
        <>
            <Modal
                 show="true"
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        risgabh
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="text-center">
                    <form className="feedback-reaction">
                    <p>How was your experience ?</p>
                    
                    <input type="radio" id="dizzy" name="reaction" value="dizzy"></input>

                    <label onClick={this.onClickHandler} htmlFor="dizzy"><i className={`far fa-dizzy display-4 m-2`} aria-hidden="true"></i></label>

                    <input type="radio" id="frown" name="reaction" value="frown"></input>

                    <label onClick={this.onClickHandler} htmlFor="frown"><i className={`far fa-frown-open display-4 m-2`} aria-hidden="true"></i></label>

                    <input type="radio" id="meh" name="reaction" value="meh"></input>

                    <label onClick={this.onClickHandler} htmlFor="meh"><i className="far fa-meh display-4 m-2" aria-hidden="true"></i></label>

                    <input type="radio" id="happy" name="reaction" value="happy"></input>

                    <label onClick={this.onClickHandler} htmlFor="happy"><i className={`far fa-grin-beam display-4 m-2`} aria-hidden="true"></i></label>

                    <input type="radio" id="love" name="reaction" value="love"></input>

                    <label onClick={this.onClickHandler} htmlFor="love"><i className={`far fa-grin-hearts display-4 m-2`} aria-hidden="true"></i></label>
                    </form>
                    <br/>
                     Chituya
                    </p>
                </Modal.Body>
             
            </Modal>
        </>
    )
}
}
