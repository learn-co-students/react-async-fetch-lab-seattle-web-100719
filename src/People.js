import React, { Component } from 'react'
import Person from './Person'

export class People extends Component {
    getPeople = () => {
        return this.props.people.map((person, index) => {
            return <Person person={person} key={index} />
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
