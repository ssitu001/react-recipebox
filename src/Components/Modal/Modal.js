import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import FormComponent from '../FormGroup/FormGroup';

const ModalComponent = (props) => {
  // console.log('modalprops', props)
  return (
    <Modal show={props.showModal} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{props.heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormComponent
          handleRecipeName={props.handleRecipeName}
          handleRecipeIngredients={props.handleRecipeIngredients}
        />
      </Modal.Body>
      <Modal.Footer>
        {props.cta === 'Add Recipe' 
          ? <Button 
              onClick={props.addRecipe}
              bsStyle="success">{props.cta}
            </Button>
          : <Button 
              bsStyle="danger">{props.cta}
            </Button>
        }
        <Button onClick={props.closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent;