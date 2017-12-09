import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class FormComponent extends Component {
  state = {
    value: '',
  }

  render() {
    return (
      <form>
        <FormGroup>
          <ControlLabel>Recipes</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Recipe Name"
            // onChange={this.handleChange}
          />
          <ControlLabel>Ingredients</ControlLabel>
          <FormControl
            componentClass="textarea"
            value={this.state.value}
            placeholder="Ingredients"
            // onChange={this.handleChange}
          />
        </FormGroup>
      </form>
    )
  }
}

export default FormComponent;