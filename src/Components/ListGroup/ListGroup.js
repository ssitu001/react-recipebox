import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

const ListGroupComponent = (props) => {
  // console.log('props', props)
  const { position, ingredients, handleDelete, openModal, closeModal} = props;
  const listItem = ingredients.map((ingredient, i) => {
    return <ListGroupItem key={i}>{ingredient}</ListGroupItem>
  });
  return (
    <ListGroup>
      {listItem}
      <div className="panel-button-group">
        <Button
          onClick={() => {handleDelete(position)}} 
          bsStyle="danger">
          Delete
        </Button>
        <Button 
          onClick={() => openModal('Edit Recipe', position)} 
          bsStyle="warning">
          Edit
        </Button>
      </div>
    </ListGroup>
  )
}

export default ListGroupComponent;