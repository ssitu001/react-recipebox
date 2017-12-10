import React from 'react';
import propTypes from "prop-types";

import { ListGroup, ListGroupItem, Button, PageHeader } from 'react-bootstrap';

import './ListGroup.css';

const ListGroupComponent = (props) => {
  const { 
    position,
    ingredients, 
    handleDelete, 
    openModal 
  } = props;

  const listItem = ingredients.map((ingredient, i) => {
    return <ListGroupItem key={i}>{ingredient}</ListGroupItem>
  });

  return (
    <ListGroup>
      <div className="list-group-header">
        <PageHeader><small>Ingredients</small></PageHeader>
      </div>
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

ListGroupComponent.propTypes = {
  position: propTypes.number,
  ingredients: propTypes.array, 
  handleDelete: propTypes.func.isRequired,
  openModal: propTypes.func.isRequired,
};

export default ListGroupComponent;