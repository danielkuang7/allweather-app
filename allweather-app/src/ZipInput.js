import React, { Component } from 'react'

class ZipInput extends Component {
    render () {
        return (
        <div>
        <form onSubmit = { this.props.handleSubmit }>
          <input 
          className="zip" 
          type="text" 
          value={ this.props.value } placeholder="Enter ZipCode here" onChange = { this.props.handleChange }>
          </input>
          
          <input 
          className="enter" type="submit" value="Enter"></input>
        </form>
            </div>
        )
    }
}

export default ZipInput 