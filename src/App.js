import React, { Component } from 'react'

export class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            manifest: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(manifest => this.setState({ manifest}));
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default App
