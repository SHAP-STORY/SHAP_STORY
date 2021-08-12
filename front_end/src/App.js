import logo from './logo.svg';
import './App.css';
import React from "react";

import Home from "./Home";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <Home/>
            </div>
        );
    }
}

export default App;
