import React, { Component } from 'react'

class Info extends Component {
    render () {
        <div className="info">
    {this.props.location && <div>Location: {this.props.location}</div>}
    {this.props.currentTemperature && <div>Current Temperature: {this.props.currentTemperature} &deg;F </div>}
    {this.props.currentCondition && <div>Current weather condition: {this.props.currentCondition}</div>}
    </div>
    }
}

export default Info 