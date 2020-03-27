import React, { Component } from 'react';
import ZipInput from './ZipInput'
import Info from './Info'
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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    let zipInput= this.state.zipCode
    zipInput.push(this.state.value)
    this.setState({zipCode: zipInput})
    this.getAPI()
  }

  getAPI () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode[0]},us&units=imperial&appid=aa69e359bfb84f6538d46dc30894898a
    `)
    .then (response => response.json())
    .then (json => {
      this.setState({
        location: json.name,
        currentTemperature: Math.round(json.main.temp),
        currentCondition: json.weather[0].description   
      })
    })
    .then (
     this.state.zipCode.pop()
    )
  }

  render() {
    return (
      <div className="app">
        <h1>Find your local US weather</h1>
        
        <ZipInput 
          value = {this.state.value}
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
        <Info 
        location = {this.state.location} 
        currentTemperature = {this.state.currentTemperature}
        currentCondition = { this.state.currentCondition}
        />
      </div>
    );
  }
}

export default App;



