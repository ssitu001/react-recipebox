import React from 'react';
import { PanelGroup } from 'react-bootstrap';

import PanelComponent from '../Panel/Panel';


const PanelGroupComponent = (props) => {
  const panels = props.recipes.map((recipe) => {
    return <PanelComponent key={recipe.id} {...recipe} />
  })
  return (
    <PanelGroup>
      {panels}
    </PanelGroup>
  )
}

export default PanelGroupComponent;