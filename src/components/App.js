import React, { Component } from "react";
import Hello from "./Hello.js";
import Toggle from "./Toggle.js";
import Clock from "./Clock.js";

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App!</h1>
                <Clock />
                <Hello />
                <Toggle />
            </div>
        );
    }
}

export default App;
