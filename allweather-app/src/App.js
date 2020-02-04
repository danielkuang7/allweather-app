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
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render(){
    return (
      <div className="App">
      <h1>Find your local US weather</h1>
      <ZipInput 
          value = {this.state.value}
          handleChange = {this.handleChange}
        />
      <Info 
      location = {this.state.location}
      currentTemperature = {this.state.currentTemperature} 
      currentCondition = {this.state.currentCondition}
      />
      </div>
    );
  }
  
}

export default App;
