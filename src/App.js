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
      cart: [],
      cartTotal: 0,
      taxTotal: 0,
      grandTotal: 0,
    }
  }

  componentDidMount() {
    // This is the wrong way of changing your data
    // this.state.things = [1, 2, 3, 4, 5, 6];

    // This is the right way
    // this.setState({
    //   products: [1, 2, 3, 4, 5, 6]
    // })

    fetch('https://fakebook-product-api.herokuapp.com/api')
      .then(res => res.json())
      .then(data => this.setState({
        products: data
      }))

  }

  // addToCart = (product) => this.setState({ cart: this.state.cart.concat(product) });
  addToCart = (product) => {
    var ct = this.state.cartTotal;
    ct = ct + product.price;
    if (this.state.cart.includes(product)) {
      product.Quantity++;
      console.log(product.Quantity)
    }
    else {
      product.Quantity = 1;
      this.setState({
        cart: this.state.cart.concat(product),
      })
    }
    this.setState({
      cartTotal: ct
    })
  }

  getCartTotal = () => {
    return this.state.cartTotal;
  }

  getTaxTotal = () => {
    return this.state.cartTotal * 0.12;
  }

  getGrandTotal = () => {
    return this.state.cartTotal + this.state.taxTotal;
  }

  removeFromCart = (product) => {
    let cart = [...this.state.cart];
    var ct = this.state.cartTotal; //set cart total function
    for (var i = 0; i < cart.length; i++) {
      if (this.state.cart[i] === product) {
        var num = document.getElementsByName("update")[i].value;
        var prevQuantity = this.state.cart[i].Quantity;
        product.Quantity = num;
        if (prevQuantity < product.Quantity) {
          ct = ct + (product.Quantity - prevQuantity) * product.price;
        }
        if (prevQuantity > product.Quantity) {
          ct = ct - (prevQuantity - product.Quantity) * product.price;
        }
        if (product.Quantity == 0) {
          let index = cart.indexOf(product);
          if (index !== -1) {
            cart.splice(index, 1);
          }
        }
        console.log(ct);
      }
    }
    document.getElementsByName("subtotal").innerHTML = this.state.cartTotal;
    var tt = ct * 0.12;
    var gt = ct + tt;
    // console.log(document.getElementsByName("subtotal").innerHTML)
    this.setState({
      cart: cart,
      cartTotal: ct,
      taxTotal: tt,
      grandTotal: gt
    })
  }

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
            <Route exact path='/shop/cart' render={() => 
            <ShopCart removeFromCart={this.removeFromCart}
              getCartTotal={this.getCartTotal}
              getTaxTotal={this.getTaxTotal}
              getGrandTotal={this.getGrandTotal}
              cart={this.state.cart} />} />

          </Switch>

        </main>

        <footer></footer>

      </div>
    )
  }
}