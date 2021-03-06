import React from 'react';
import propTypes from "prop-types";

import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import './FormGroup.css';

const showRequiredStar = (inputField) => {
  return inputField.length > 2
  ? null
  : <span className="required-field">*</span>;
};

const FormComponent = (props) => {
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
              <ControlLabel>
                Recipe {showRequiredStar(currentRecipeName)}
              </ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Recipe Name"
                  name="currentRecipeName"
                  onChange={handleRecipe}
                />
              <ControlLabel>
                Ingredients {showRequiredStar(currentRecipeIngredients)}
              </ControlLabel>
                <FormControl
                  componentClass="textarea"
                  placeholder="Add ingredients separated by comma ie. milk, butter, sugar"
                  name="currentRecipeIngredients"
                  onChange={handleRecipe}
                />
            </FormGroup>
          : <FormGroup>
              <ControlLabel>Recipe</ControlLabel>
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

FormGroup.propTypes = {
  currentRecipeName: propTypes.string.isRequired,
  currentRecipeIngredients: propTypes.string.isRequired,
  handleRecipe: propTypes.func.isRequired,
  modalType: propTypes.string.isRequired,
};

export default FormComponent;