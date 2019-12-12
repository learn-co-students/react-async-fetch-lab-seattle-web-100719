// create your App component here
import React, { Component } from 'react';

class App extends Component {

    componentDidMount()
    {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(json => {
            // update state?
        })
    }

    render() {
        return (
            <div>
                THIS IS WORKING!
            </div>
        );
    }
}

export default App;