// create your App component here
import React from 'react';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            people: []
        }
    }
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    people: [...json]
                })
            })
    }
    renderPeople = () => {
        return this.state.people.map(person => {
            const {name, craft} = person
            return (
            <div>
                <span>Name: {name}, Craft: {craft}</span>
            </div>
                )
        })
    }

    render() {
        return (
            <div>
                {this.renderPeople()}
            </div>
        )
    }
}