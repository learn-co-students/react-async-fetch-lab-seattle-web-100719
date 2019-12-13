import React, { Component } from 'react'
import People from './People'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            people: []
        }
    }
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(json => {
                console.log(json.people)
                this.setState({ people: json.people })
            })
    }

    render() {
        return (
            <div>
                <People people={this.state.people} />
            </div>
        )
    }
}

export default App
