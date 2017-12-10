import React from 'react';
import propTypes from "prop-types";
import { PanelGroup } from 'react-bootstrap';

import PanelComponent from '../Panel/Panel';

const PanelGroupComponent = (props) => {
  const panels = props.recipes.map((recipe, i) => {
    return (
      <PanelComponent 
        key={i}
        position={i} 
        {...recipe} 
        handleDelete={props.handleDelete}
        openModal={props.openModal} 
        closeModal={props.closeModal}
      />
    )
  });
  
  return (
    <PanelGroup>
      {panels}
    </PanelGroup>
  )
}

PanelComponent.propTypes = {
  ingredients: propTypes.array.isRequired,
}

export default PanelGroupComponent;