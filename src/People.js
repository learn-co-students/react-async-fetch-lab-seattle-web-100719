import React, { Component } from 'react'
import Person from './Person'

export class People extends Component {
    getPeople = () => {
        return this.props.people.map(person => {
            return <Person person={person} />
        })
    }
    render() {
        return (
            <div>
                {this.getPeople()}
            </div>
        )
    }
}

export default People
