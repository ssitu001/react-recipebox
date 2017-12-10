import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import './FormGroup.css';

const FormComponent = (props) => {
    console.log('formprops', props)
    const {
      currentRecipeName, 
      currentRecipeIngredients, 
      handleRecipe,
      modalType,
    } = props;

    return (
      <form>
        {
          modalType === 'Add Recipe'
          ? <FormGroup>
              <ControlLabel>Recipes</ControlLabel>
                <FormControl
                  type="text"
                  placeholder={currentRecipeName}
                  name="currentRecipeName"
                  onChange={handleRecipe}
                />
              <ControlLabel>Ingredients</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  placeholder={currentRecipeIngredients}
                  name="currentRecipeIngredients"
                  onChange={handleRecipe}
                />
            </FormGroup>
          : <FormGroup>
              <ControlLabel>Recipes</ControlLabel>
              <FormControl
                type="text"
                value={currentRecipeName}
                name="currentRecipeName"
                onChange={handleRecipe}
              />
              <ControlLabel>Ingredients</ControlLabel>
              <FormControl
                componentClass="textarea"
                value={currentRecipeIngredients}
                name="currentRecipeIngredients"
                onChange={handleRecipe}
              />
            </FormGroup>
        }
      </form>
    )
}

export default FormComponent;