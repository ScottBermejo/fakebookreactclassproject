import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './views/Home';
import Shop from './views/Shop';
import Contact from './views/Contact';

export default class App extends Component {
  constructor() {
    super();

    console.log("Component constructed");
  }
  
  render() {
    console.log("Component rendered");
    
    return (
      <div>
        <header>
          <Navbar />
        </header>

        <main className="container">

          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route path='/contact' render={() => <Contact />} />
            <Route path='/shop' render={() => <Shop />} />
          </Switch>

        </main>

        <footer></footer>

      </div>
    )
  }

  componentDidMount() {
    console.log("Component mounted");
  }

}