import React, {Component} from 'react';
import Iframe from './components/iframe.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: 'http://localhost:5000/api/home/register'
        };
    }

    render() {
        return (
            <div className="App">
                <h1>react</h1>
                <Iframe source={this.state.src} />
            </div>
        );
    }
}

export default Home;