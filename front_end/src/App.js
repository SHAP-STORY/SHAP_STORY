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
import SignUp from './SignUp';
import SignUpComplete from './SignUpComplete';
import Basic from "./Basic";
import Advanced from "./LevelUp";


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
                <Route path="/doQuestion" component={DoQuestion}></Route>
                <Route path="/signIn" component={SignIn}></Route>
                <Route path="/signUp" component={SignUp}></Route>
                <Route path="/signUpComplete" component={SignUpComplete}></Route>
                <Route path="/basic" component={Basic}/>
                <Route path="/advanced" component={Advanced}/>
            </div>
        );
    }
}

export default App;
