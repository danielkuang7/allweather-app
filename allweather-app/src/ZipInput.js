import React, { Component } from 'react'

class ZipInput extends Component {
    render () {
        return (
            <div>
            <form onSubmit = { this.props.handleSubmit }>
            <input 
             className="zip">
             </input>
            </form>
                </div>
            )
        
}
}

export default ZipInput 