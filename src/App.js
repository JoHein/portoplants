import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Products from './components/Products';
import Cart from './components/Cart';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";



class App extends Component{
    render() {
        return (
            <div>
                <Router>
                    <Menu />
                    <div>
                        <Switch>
                            <Route exact path="/portoplants" component={Home} />
                            <Route path="/products" component={Products} />
                            <Route path="/about" component={About} />
                            <Route path="/cart" component={Cart} />
                            <Redirect to="/portoplants" />
                        </Switch>
                    </div>
                </Router>

            </div>

        );
    }
  
}

export default App;
