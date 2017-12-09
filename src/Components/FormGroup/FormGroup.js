import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class FormComponent extends Component {
  state = {
    value: '',
  }

  render() {
    // console.log('props', this.props)
    return (
      <form>
        <FormGroup>
          <ControlLabel>Recipes</ControlLabel>
          <FormControl
            type="text"
            // value={this.state.value}
            placeholder="Recipe Name"
            onChange={this.props.handleRecipeName}
          />
          <ControlLabel>Ingredients</ControlLabel>
          <FormControl
            componentClass="textarea"
            // value={this.state.value}
            placeholder="Ingredients"
            onChange={this.props.handleRecipeIngredients}
          />
        </FormGroup>
      </form>
    )
  }
}

export default FormComponent;