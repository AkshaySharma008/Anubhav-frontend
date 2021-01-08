import React from 'react';
import axios from 'axios';
import { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import "./index.scss"

export default class FeedbackModal extends Component {
    
    state = {
        feedback: '',
        rating: 5,
        hidden: false,
    }

    ratingChangeHandler = (id) => {
        if(id.target.id==="dizzy"){
            this.setState({rating:1})
        }
        else if(id.target.id==="frown"){
            this.setState({rating:2})
        }
        else if(id.target.id==="meh"){
            this.setState({rating:3})
        }
        else if(id.target.id==="happy"){
            this.setState({rating:4})
        }
        else if(id.target.id==="love"){
            this.setState({rating:5})
        }
    }

    

    postDataHandler = () => {
        const data = {
            article : this.props.article,
            authorName: this.props.authorName,
            feedback: this.state.feedback,
            rating : this.state.rating
        };
        console.log(data)
        axios.post('/api/v1/feedback', data)
            .then(response => {
                setTimeout(() => {
                    window.location = "/";
                }, 1000);

            });
            
    }

    render() {  
        return (
            <>
               
                <Modal
                    show={this.props.show}
                    onHide={this.props.onHide}
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
                        <div className=" text-center feedback-reaction" >
                        <p>How was your experience ?</p>
                        
                        <input type="radio" id="dizzy" name="reaction" value="dizzy" onClick={(id) => this.ratingChangeHandler(id)}></input>

                        <label htmlFor="dizzy"><i className={`far fa-dizzy display-4 m-1 p-1`} aria-hidden="true" ></i></label>

                        <input type="radio" id="frown" name="reaction" value="frown" onClick={(id) => this.ratingChangeHandler(id)}></input>

                        <label htmlFor="frown"><i className={`far fa-frown-open display-4 m-1 p-1`} aria-hidden="true"></i></label>

                        <input type="radio" id="meh" name="reaction" value="meh" onClick={(id) => this.ratingChangeHandler(id)}></input>

                        <label htmlFor="meh"><i className={`far fa-meh display-4 m-1 p-1`} aria-hidden="true"></i></label>

                        <input type="radio" id="happy" name="reaction" value="happy" onClick={(id) => this.ratingChangeHandler(id)}></input>

                        <label htmlFor="happy"><i className={`far fa-grin-beam display-4 m-1 p-1`} aria-hidden="true"></i></label>

                        <input type="radio" id="love" name="reaction" value="love" onClick={(id) => this.ratingChangeHandler(id)}></input>

                        <label htmlFor="love"><i className={`far fa-grin-hearts display-4 m-1 p-1`} aria-hidden="true"></i></label>
                        <br/>
                        <textarea  value={this.state.feedback} onChange={(event) => this.setState({feedback: event.target.value})} id="feedback-reaction-text" name="reaction" placeholder="Anything More You Wanna Add... (Optional)" rows="5"></textarea>
                        <br />
                        <br />
                        <button className="btn btn-primary" onClick={this.postDataHandler}>Submit</button>
                        </div>
                        <br/>
                    </Modal.Body>
                
                </Modal>
            </>
        )
    }
}
