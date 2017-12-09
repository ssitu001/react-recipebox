import React, { Component } from 'react';
import { Grid, Row, Col, Well, Button } from 'react-bootstrap';

import PanelGroupComponent from '../PanelGroup/PanelGroup';
import ModalComponent from '../Modal/Modal';

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
      showModal: false,
      modalType: '',
    };
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  openModal = (type) => {
    this.setState({showModal: true, modalType: type});
  }

  componentDidMount() {
    //save recipes to local storage
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  createModal(type) {
    console.log('type', type)
    return (
      <ModalComponent
        heading={this.state.modalType} 
        showModal={this.state.showModal} 
        closeModal={this.closeModal}
      />
    )
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col lg={12}>
            <Well>
              <PanelGroupComponent
                openModal={this.openModal}
                closeModal={this.closeModal} 
                {...this.state} />
            </Well>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Button
              onClick={() => this.openModal('Add Recipe')} 
              bsSize={'large'} 
              bsStyle={'success'}>
              Add Recipe
            </Button>
          </Col>
        </Row>
        {this.createModal(this.state.modalType)}
      </Grid>
    )
  }
}

export default RecipeBox;