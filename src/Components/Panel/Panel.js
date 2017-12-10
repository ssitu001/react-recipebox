import React from 'react';
import { Panel } from 'react-bootstrap';

import ListGroupComponent from '../ListGroup/ListGroup';

const PanelComponent = (props) => {
  
  const {position, name, ingredients, handleDelete, openModal, closeModal} = props;

  return (
    <Panel 
      bsStyle="danger" 
      collapsible 
      header={name}>
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

export default PanelComponent;