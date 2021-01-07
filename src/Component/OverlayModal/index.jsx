import React from 'react'
import Modal from 'react-bootstrap/Modal'

const OverlayModal = ({modalContent,show,onHide}) => {
    
    return (
        <>
            <Modal
                 show={show} onHide={onHide} 
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {modalContent.heading}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="text-center">
                    <i class={`far fa-dizzy display-4`} aria-hidden="true"></i>
                    <i class={`far fa-frown-open display-4`} aria-hidden="true"></i>
                    <i class={`far fa-meh display-4`} aria-hidden="true"></i>
                    <i class={`far fa-grin-beam display-4`} aria-hidden="true"></i>
                    <i class={`far fa-grin-hearts display-4`} aria-hidden="true"></i>
                    <br/>
                    {modalContent.text}
                    </p>
                </Modal.Body>
             
            </Modal>
        </>
    )
}

export default OverlayModal
