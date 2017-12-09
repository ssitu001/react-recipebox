import React from 'react';
import { PanelGroup } from 'react-bootstrap';

import PanelComponent from '../Panel/Panel';


const PanelGroupComponent = (props) => {
  // console.log('panelGroup', props)
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

export default PanelGroupComponent;