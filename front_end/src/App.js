import logo from './logo.svg';
import './App.css';
import React from "react";
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";

import Home from "./Home";
import QnABoard from "./Questions";
import Questions from "./Questions";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <Route path="/" exact component={Home}/>
                <Route path="/questions" component={Questions}/>
            </div>
        );
    }
}

export default App;
