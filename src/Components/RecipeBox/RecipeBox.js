import React, { Component } from 'react';
import { Grid, Row, Col, Well, PageHeader } from 'react-bootstrap';

import PanelGroupComponent from '../PanelGroup/PanelGroup';
import ModalComponent from '../Modal/Modal';

import './RecipeBox.css';

class RecipeBox extends Component {
    state = {
      recipes: [],
      currentRecipeName: '',
      currentRecipeIngredients: '',
      showModal: false,
      modalType: '',
      position: null,
    };

  closeModal = () => {
    this.setState({showModal: false});
  }

  openModal = (type, position) => {
    const {recipes} = this.state;
    const currentRecipe = recipes[position];
    const recipeName = currentRecipe ? currentRecipe.name : '';
    const recipeIngredients = currentRecipe ? currentRecipe.ingredients : '';

    this.setState({
      showModal: true, 
      modalType: type, 
      position: position,
      currentRecipeName: recipeName,
      currentRecipeIngredients: recipeIngredients,
    });
  }

  componentDidMount() {
    const myStorage = localStorage;
    const myRecipes = JSON.parse(myStorage.getItem('__recipes'));
    if (myRecipes) {
      this.setState({
        recipes: myRecipes,
      });
    }
  }

  handleRecipe = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  editRecipe = (position) => {
    const {currentRecipeName, currentRecipeIngredients, recipes} = this.state;
    const recipeToReplace = {
      name: currentRecipeName,
      ingredients: !Array.isArray(currentRecipeIngredients) ? currentRecipeIngredients.split(',') : currentRecipeIngredients,
    }

    const updatedRecipe = recipes.map((recipe, i) => {
      if (position === i) {
        recipe = recipeToReplace;
      }
      return recipe;
    });

    this.setState({
      recipes: updatedRecipe,
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
              <PageHeader>
              {
                this.state.recipes.length 
                  ? 'Your current recipes'
                  : 'Get started by adding a recipe!'
              }
              </PageHeader>
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
            <button
              className="custom-btn"
              onClick={() => this.openModal('Add Recipe')} 
              >
              Add Recipe
            </button>
          </Col>
        </Row>
        {this.createModal(this.state.modalType)}
      </Grid>
    )
  }
}

export default RecipeBox;