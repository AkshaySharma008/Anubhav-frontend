import React from 'react';
import { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import "./index.scss"

export default class FeedbackModal extends Component {

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
                        Successfuly Submitted !
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className=" text-center feedback-reaction" method="get">
                    <p>How was your experience ?</p>
                    
                    <input type="radio" id="dizzy" name="reaction" value="dizzy"></input>

                    <label htmlFor="dizzy"><i className={`far fa-dizzy display-4 m-2`} aria-hidden="true"></i></label>

                    <input type="radio" id="frown" name="reaction" value="frown"></input>

                    <label htmlFor="frown"><i className={`far fa-frown-open display-4 m-2`} aria-hidden="true"></i></label>

                    <input type="radio" id="meh" name="reaction" value="meh"></input>

                    <label htmlFor="meh"><i className={`far fa-meh display-4 m-2`} aria-hidden="true"></i></label>

                    <input type="radio" id="happy" name="reaction" value="happy"></input>

                    <label htmlFor="happy"><i className={`far fa-grin-beam display-4 m-2`} aria-hidden="true"></i></label>

                    <input type="radio" id="love" name="reaction" value="love"></input>

                    <label htmlFor="love"><i className={`far fa-grin-hearts display-4 m-2`} aria-hidden="true"></i></label>
                    <br/>
                    <textarea id="feedback-reaction-text" name="reaction" placeholder="Anything More You Wanna Add... (Optional)" rows="5"></textarea>
                    <br />
                    <br />
                    <button className="btn btn-primary" type="submit" >Submit</button>
                    </form>
                    <br/>
                </Modal.Body>
             
            </Modal>
        </>
    )
}
}
