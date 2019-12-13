// create your App component here
import React, {Component} from 'react'

class App extends Component {

    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    peopleInSpace: data.people
                })
            })
    }

    renderEachPerson = () => {
        return this.state.peopleInSpace.map((person) => {
            return <li>{person.name}</li>
        })
    }

    render() {
        return (
            <div>
                <h1>People in Space:</h1>
                <ul>{this.renderEachPerson()}</ul>
            </div>
        )
    }
}

export default App;