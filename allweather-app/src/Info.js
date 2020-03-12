import React, { Component } from 'react'

class Info extends Component {
    render () {
        <div className="info"></div>
    {this.props.location && <div>Location: {this.props.location}</div>}
    {this.props.currentTemperature && <div>Current Temperature: {this.props.currentTemperature} &deg;F </div>}
    }
}

export default Info 