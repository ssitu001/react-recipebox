import React from 'react';
import propTypes from "prop-types";
import { Modal, Button } from 'react-bootstrap';

import FormComponent from '../FormGroup/FormGroup';

import './Modal.css';

const ModalComponent = (props) => {
  const { 
    showModal,
    closeModal, 
    modalType, 
    addRecipe, 
    editRecipe,
    position,
    currentRecipeName,
    currentRecipeIngredients, 
  } = props;

  const buttonDisabled = (currentRecipeName.length > 2 && currentRecipeIngredients.length > 2) ? false : true;

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{modalType}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormComponent
          {...props}
        />
      </Modal.Body>
      <Modal.Footer>
        {
          modalType === 'Add Recipe' 
          ? <Button   
              onClick={addRecipe}
              disabled={buttonDisabled}
              bsStyle="success">
              {modalType}
            </Button>
          : <Button 
              onClick={() => editRecipe(position)}
              bsStyle="success">
              {modalType}
            </Button>
        }
        <Button bsStyle="warning" onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

ModalComponent.propTypes = {
  showModal: propTypes.bool.isRequired,
  closeModal: propTypes.func.isRequired,
  modalType: propTypes.string.isRequired, 
  addRecipe: propTypes.func.isRequired, 
  editRecipe: propTypes.func.isRequired,
  position: propTypes.number,
  currentRecipeName: propTypes.string.isRequired,
  currentRecipeIngredients: propTypes.string.isRequired, 
};

export default ModalComponent;