import React, { Component } from 'react';
import { Grid, Row, Col, Well, PanelGroup, Panel, Button } from 'react-bootstrap';

import PanelGroupComponent from '../PanelGroup/PanelGroup';

class RecipeBox extends Component {
  constructor() {
    super();

    this.state = {
      recipes: [
        {
          id: 0,
          name: 'Cookies',
          ingredients: ['milk', 'butter', 'sugar'],
        }
      ],
      currentRecipe: {},
    };
  }

  componentDidMount() {
    //save recipes to local storage
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col lg={12}>
            <Well>
              <PanelGroupComponent {...this.state}/>
            </Well>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Button bsSize={'large'} bsStyle={'success'}>Add Recipe</Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default RecipeBox;