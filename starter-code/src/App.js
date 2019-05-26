import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './data/foods.json'
import FoodBox from './components/FoodBox'
import FoodList from './components/FoodList'


class App extends Component {
  state ={
    foods: foods.map(item => item)
  }
  render() {
    return (
      <div className="App">
        <FoodList foods ={this.state.foods}/>
      </div>
      
    );
  }
}

export default App;
