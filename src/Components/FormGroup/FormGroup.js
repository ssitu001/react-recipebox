import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class FormComponent extends Component {
  state = {
    name: '',
  }

  render() {
    console.log('formprops', this.props)
    const {
      currentRecipeName, 
      currentRecipeIngredients, 
      handleRecipe,
      modalType,
    } = this.props;

    return (
      <form>
        {
          modalType === 'Add Recipe'
          ? <FormGroup>
          <ControlLabel>Recipes</ControlLabel>
          <FormControl
            type="text"
            placeholder="Recipe Name"
            onChange={handleRecipe}
          />
          <ControlLabel>Ingredients</ControlLabel>
          <FormControl
            componentClass="textarea"
            placeholder="Ingredients"
            onChange={handleRecipe}
          />
        </FormGroup>
        : <FormGroup>
            <ControlLabel>Recipes</ControlLabel>
            <FormControl
              type="text"
              value={currentRecipeName}
              name="currentRecipeName"
              // placeholder="Recipe Name"
              onChange={handleRecipe}
            />
            <ControlLabel>Ingredients</ControlLabel>
            <FormControl
              componentClass="textarea"
              value={currentRecipeIngredients}
              // placeholder="Ingredients"
              name="currentRecipeIngredients"
              onChange={handleRecipe}
            />
          </FormGroup>
        }
      </form>
    )
  }
}

export default FormComponent;