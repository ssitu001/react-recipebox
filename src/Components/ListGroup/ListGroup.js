import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const ListGroupComponent = (props) => {
  const listItem = props.ingredients.map((ingredient, i) => {
    return <ListGroupItem>{ingredient}</ListGroupItem>
  });

  return (
    <ListGroup>
      {listItem}
    </ListGroup>
  )
}

export default ListGroupComponent;
