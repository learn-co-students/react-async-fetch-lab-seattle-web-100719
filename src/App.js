// create your App component here
import React from 'react';

export default class App extends React.Component{

    state= {
        people: []
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(json => this.changeState(json))
    }

    changeState(json){
        this.setState({
            people: json.people
        }, ()=> console.log(this.state.people[0].name))
    }

    render(){

        return <div>Try</div>
    }

}