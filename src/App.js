import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './views/Home';
import Shop from './views/Shop';
import Contact from './views/Contact';
import ShopCart from './views/ShopCart';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      cart: []
    }
  }

  componentDidMount() {
    // This is the wrong way of changing your data
    // this.state.things = [1, 2, 3, 4, 5, 6];

    // This is the right way
    // this.setState({
    //   products: [1, 2, 3, 4, 5, 6]
    // })

    fetch('http://localhost:5000/api/shop')
      .then(res => res.json())
      .then(data => this.setState({
        products: data
      }))

  }

  addToCart = (product) => this.setState({ cart: this.state.cart.concat(product) });
  
  render() {
    // console.log("Component rendered");
    
    return (
      <div>
        <header>
          <Navbar cart={this.state.cart} />
        </header>

        <main className="container">

          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route path='/contact' render={() => <Contact />} />
            <Route exact path='/shop' render={() => <Shop addToCart={this.addToCart} products={this.state.products} />} />
            <Route path='/shop/cart' render={() => <ShopCart cart={this.state.cart} />} />
          </Switch>

        </main>

        <footer></footer>

      </div>
    )
  }
}