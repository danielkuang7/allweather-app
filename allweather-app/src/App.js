import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      zipCode: [],
      location: '',
      currentTemperature: '',
      currentCondition: ''
    }
  }
  render(){
    return (
      <div className="App">
      <h1>Find your local US weather</h1>
      <ZipInput 
          value = {this.state.value}
        />
      <Info 
      location = {this.state.location}
      currentTemperature = {this.state.currentTemperature} 
      />
      </div>
    );
  }
  
}

export default App;
