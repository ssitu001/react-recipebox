import React from 'react';
import { Panel } from 'react-bootstrap';

import ListGroupComponent from '../ListGroup/ListGroup';

const PanelComponent = (props) => {
  const {id, name, ingredients} = props;
  // const ingredientRows = ingredients.map((ingredient, i) => {
  //   return <ListGroupComponent key={i} ingredient={ingredient}/>
  // });

  return (
      <Panel bsStyle="primary" collapsible header={name} eventKey="1">
        <ListGroupComponent ingredients={ingredients} />
      </Panel>
  )
}

export default PanelComponent;