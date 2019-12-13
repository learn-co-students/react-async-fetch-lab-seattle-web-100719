import React, { Component } from 'react'

export class Person extends Component {
    render() {
        const { name, craft } = this.props.person
        return (
            <div>
                <h3>Name:{name}</h3>
                <h4>Craft:{craft}</h4>
            </div>
        )
    }
}

export default Person
