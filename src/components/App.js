import React, {Component, useState} from "react";
import '../styles/App.css';
import { Switch, Route } from "react-router";
import Home from "./Home";
import About from "./About";

class App extends Component {
    render() {

        return(
            <div id="main">
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  
              </ul>
            <Switch>
            <Route path="/about" component={About}/>
                <Route path="/" component={Home}/>
               
            </Switch>

            </div>
        )
    }
}


export default App;
