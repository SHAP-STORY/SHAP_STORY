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
//import QnABoard from "./QuestionBoard";
import Questions from "./QuestionBoard";
import DoQuestion from "./DoQuestion";
import SignIn from "./SignIn";
import Mypage from "./MyPage";

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
                <Route path="/doQuestion" component={DoQuestion}/>
                <Route path="/signIn" component={SignIn}/>
                <Route path="/mypage" component={Mypage}/>
            </div>
        );
    }
}

export default App;
