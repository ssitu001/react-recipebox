import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

import './ListGroup.css';

const ListGroupComponent = (props) => {
  const { 
    position,
    ingredients, 
    handleDelete, 
    openModal } = props;

  const listItem = ingredients.map((ingredient, i) => {
    return <ListGroupItem key={i}>{ingredient}</ListGroupItem>
  });
  
  return (
    <ListGroup>
      {listItem}
      <div className="panel-button-group">
        <Button
          className="recipe-btn"
          onClick={() => {handleDelete(position)}} 
          bsStyle="info">
          Delete
        </Button>
        <Button 
          className="recipe-btn"
          onClick={() => openModal('Edit Recipe', position)} 
          bsStyle="warning">
          Edit
        </Button>
      </div>
    </ListGroup>
  )
}

export default ListGroupComponent;