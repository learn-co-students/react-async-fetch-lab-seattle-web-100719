// create your App component here
import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            people: []
        }
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(data => {
            console.log(data.people)
            this.setState({
                people: data.people
            })
        })
    }

    render(){
        return <div>
           {this.state.people.map((person, index) => {
               return <li key={index}>{person.name + ' ' + person.craft}</li>
           })}
        </div>
    }
}

export default App;