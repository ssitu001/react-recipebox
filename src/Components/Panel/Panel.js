import React from 'react';
import { Panel } from 'react-bootstrap';

import ListGroupComponent from '../ListGroup/ListGroup';

const PanelComponent = (props) => {
  
  const {id, name, ingredients, openModal, closeModal} = props;

  return (
    <Panel bsStyle="primary" collapsible header={name} eventKey="1">
      <ListGroupComponent 
        id={id} 
        ingredients={ingredients}
        openModal={openModal}
        closeModal={closeModal} 
      />
    </Panel>
  )
}

export default PanelComponent;