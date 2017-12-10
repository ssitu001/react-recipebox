import React from 'react';
import propTypes from "prop-types";
import { Panel } from 'react-bootstrap';

import ListGroupComponent from '../ListGroup/ListGroup';

const PanelComponent = (props) => {
  
  const {
    position, 
    name, 
    ingredients, 
    handleDelete, 
    openModal, 
    closeModal
  } = props;

  const panelHeader = (
    <div>
      <h3>{name}</h3>
    </div>
  )

  return (
    <Panel 
      bsStyle="danger" 
      collapsible 
      header={panelHeader}
      >
      <ListGroupComponent 
        position={position} 
        ingredients={ingredients}
        handleDelete={handleDelete}
        openModal={openModal}
        closeModal={closeModal} 
      />
    </Panel>
  )
}

PanelComponent.propTypes = {
  position: propTypes.number,
  name: propTypes.string.isRequired,
  ingredients: propTypes.array.isRequired,
  handleDelete: propTypes.func.isRequired,
  openModal: propTypes.func.isRequired,
  closeModal: propTypes.func.isRequired,
};

export default PanelComponent;