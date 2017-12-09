import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import FormComponent from '../FormGroup/FormGroup';

const ModalComponent = (props) => {
  return (
    <Modal show={props.showModal} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{props.heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormComponent />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent;