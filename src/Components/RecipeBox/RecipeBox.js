import React, { Component } from 'react';
import { Grid, Row, Col, Well, Button } from 'react-bootstrap';

import PanelGroupComponent from '../PanelGroup/PanelGroup';
import ModalComponent from '../Modal/Modal';

class RecipeBox extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      recipes: [],
      currentRecipeName: '',
      currentRecipeIngredients: '',
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
    console.log(localStorage)
    const myStorage = localStorage;
    const myRecipes = JSON.parse(myStorage.getItem('__recipes'));
    console.log('myRecipes', myRecipes)
    if (myRecipes) {
      this.setState({
        recipes: myRecipes,
      })
    }
  }

  componentDidUpdate() {
    console.log(this.state)
    this.updateLocalStorage()
  }
  
  handleRecipeName = (e) => {
    this.setState({
      currentRecipeName: e.target.value,
    })
  }

  handleRecipeIngredients = (e) => {
    this.setState({
      currentRecipeIngredients: e.target.value,
    });
  }

  addRecipe = () => {
    const {currentRecipeName, currentRecipeIngredients, recipes, count} = this.state;
    const recipeToAdd = {
      // id: count,
      name: currentRecipeName,
      ingredients: currentRecipeIngredients.split(','),
    }
    this.setState({
      // count: count+1,
      recipes: recipes.concat(recipeToAdd)
    });

    this.closeModal();
  }

  deleteRecipe = (idx) => {
    const { recipes } = this.state; 
    
    this.setState({
      recipes: recipes.filter((recipes, i) => i !== idx),
    });
  }

  updateLocalStorage() {
    const { recipes } = this.state;
    console.log('yo', recipes)
    const myStorage = localStorage;
    myStorage.setItem('__recipes', JSON.stringify(recipes));
  }
 
  createModal(type) {
    return (
      // type === 'Add Recipe'
      // ? 
      <ModalComponent
        handleRecipeName={this.handleRecipeName}
        handleRecipeIngredients={this.handleRecipeIngredients}
        addRecipe={this.addRecipe}
        heading={this.state.modalType} 
        showModal={this.state.showModal} 
        closeModal={this.closeModal}
        cta={this.state.modalType}
      />
      // : <ModalComponent
      //     handleRecipeName={this.handleRecipeName}
      //     handleRecipeIngredients={this.handleRecipeIngredients}
      //     heading={this.state.modalType} 
      //     showModal={this.state.showModal} 
      //     closeModal={this.closeModal}
      //     cta={'Edit Recipe'}
      // />
    )
  }


  render() {
    return (
      <Grid>
        <Row>
          <Col lg={12}>
            <Well>
              Recipes...
              <PanelGroupComponent
                handleDelete={this.deleteRecipe}
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