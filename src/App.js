import React from "react";
import { Switch, Route } from 'react-router-dom'

import "./App.css";

import HomePage from './pages/Homepage/Homepage.component';

function HatsPage() {
    return (
        <div>
            <h1>HATS PAGE</h1>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/hats' component={HatsPage} />
            </Switch>
        </div>
    );
}

export default App;
