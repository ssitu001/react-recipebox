import React from 'react';
import { Panel } from 'react-bootstrap';

import image from '../../recipe-logo.png';

import ListGroupComponent from '../ListGroup/ListGroup';

const PanelComponent = (props) => {
  
  const {position, name, ingredients, handleDelete, openModal, closeModal} = props;

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

export default PanelComponent;