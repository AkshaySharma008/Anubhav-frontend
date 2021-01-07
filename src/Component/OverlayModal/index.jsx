import React from 'react'
import Modal from 'react-bootstrap/Modal'

const OverlayModal = ({modalContent,show,onHide}) => {
    
    return (
        <>
            <Modal
                 show={show} onHide={onHide} 
                size="lg"
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
                    <i class={`fa ${modalContent.icon} display-3`} aria-hidden="true"></i>
                    <br/>
                    {modalContent.text}
                    </p>
                </Modal.Body>
             
            </Modal>
        </>
    )
}

export default OverlayModal
