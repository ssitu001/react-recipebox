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
      position: null,
    };
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  openModal = (type, position) => {
    console.log('position==', position)
    const {recipes, currentRecipeName, currentRecipeIngredients} = this.state;
    const currentRecipe = recipes[position];
    const recipeName = currentRecipe.name || currentRecipeName;
    const recipeIngredients = currentRecipe.ingredients || currentRecipeIngredients;

    this.setState({
      showModal: true, 
      modalType: type, 
      position: position,
      currentRecipeName: recipeName || '',
      currentRecipeIngredients: recipeIngredients || '',
    });
  }

  componentDidMount() {
    //save recipes to local storage
    const myStorage = localStorage;
    const myRecipes = JSON.parse(myStorage.getItem('__recipes'));
    if (myRecipes) {
      this.setState({
        recipes: myRecipes,
      })
    }
  }

  componentDidUpdate() {
    console.log(this.state)
  }


  handleRecipe = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  editRecipe = (position) => {
    console.log('position', position)
    const {currentRecipeName, currentRecipeIngredients, recipes} = this.state;
    const recipeToReplace = {
      name: currentRecipeName,
      ingredients: !Array.isArray(currentRecipeIngredients) ? currentRecipeIngredients.split(',') : currentRecipeIngredients,
    }

    const recipesCopy = recipes.slice();
    recipesCopy[position] = recipeToReplace;

    console.log('recipesCopy', recipesCopy)
    this.setState({
      recipes: recipesCopy,
    }, () => this.updateLocalStorage());

    this.closeModal();
  }

  addRecipe = () => {
    const {currentRecipeName, currentRecipeIngredients, recipes} = this.state;
    const recipeToAdd = {
      name: currentRecipeName,
      ingredients: currentRecipeIngredients.split(','),
    }
    this.setState({
      recipes: recipes.concat(recipeToAdd)
    }, () => this.updateLocalStorage());

    this.closeModal();
  }

  deleteRecipe = (idx) => {
    const { recipes } = this.state; 
    
    this.setState({
      recipes: recipes.filter((recipes, i) => i !== idx),
    }, () => this.updateLocalStorage());
  }

  updateLocalStorage() {
    const { recipes } = this.state;
    console.log('yo', recipes)
    const myStorage = localStorage;
    myStorage.setItem('__recipes', JSON.stringify(recipes));
  }
 
  createModal(type, position) {
    return (
      <ModalComponent
        {...this.state}
        handleRecipe={this.handleRecipe}
        addRecipe={this.addRecipe}
        editRecipe={this.editRecipe}
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