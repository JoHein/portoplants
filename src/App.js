import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Products from './components/Products';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class App extends Component{
    render() {
        return (
            <div>
                <Router>
                    <Menu />

                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/products" component={Products} />
                            <Route path="/about" component={About} />
                        </Switch>
                    </div>
                </Router>

            </div>

        );
    }
  
}

export default App;
