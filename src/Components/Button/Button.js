import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonComponent = (props) => {
  const buttonSize = props.buttonSize;
  const buttonStyle = props.buttonStyle || 'default';
  const buttonName = props.

  return (
    <Button bsSize={buttonSize} bsStyle={buttonStyle}>
      {}
    </Button>
  )
}

export default ButtonComponent;