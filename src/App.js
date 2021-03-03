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
      cartTotal: 0

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
    // var count = this.state.cartTotal;
    // product.quantity =  1 if product.name is not already in the list. use variable like name or the id. loop through list and if product.id=listproduct.id, then add 1 to the quantity and if it's not in the list make it equal to one and add it to the list. if id didn't exist, add item with the id, if tit id exist, add that to the quantity.
    // this.setState({
    //   cartTotal: count += product.price
    // })
    
    if(this.state.cart.includes(product)){
      product.Quantity++;
      console.log(product.Quantity)
    }
    else{
      product.Quantity = 1;
      this.setState({
        cart: this.state.cart.concat(product)
      })
      
    }
  }

  removeFromCart = (product) => {
    let cart = [...this.state.cart];
    for(var i=0; i< cart.length;i++){
      if(this.state.cart[i] == product){
      var num = document.getElementsByName("update")[i].value;
      console.log(num);
      product.Quantity = num;
      this.state.cartTotal = this.state.cartTotal + (product.Quantity*product.price);
      console.log(this.state.cartTotal);
  }}
    document.getElementsByName("subtotal").innerHTML = this.state.cartTotal;

    this.setState({
      cart: cart
    })
  

    // let index = cart.indexOf(product);

    // let total = this.state.cartTotal;
    // if (index !== -1) {
    //   cart.splice(index, 1);
    
    //   this.setState({
    //     cart: cart,
    //     cartTotal: total -= product.price
    //   })
    // }
  }


  updateCart = (product) => {
    let cart = [...this.state.cart];
    var num = document.getElementById("update");
    console.log(num);
    product.Quantity = num;
    console.log(product.Quantity);
    this.setState({
      cart: cart
    })
    }

  clearCart = () => {
    this.setState({
      cart: [],
      cartTotal: 0
    })
  }
//make a new list made from original list, return that in it's own state, make new state that passes in quantity values
//product.quantity =  1 if product.name is not already in the list. use variable like name or the id. loop through list and if product.id=listproduct.id, then add 1 to the quantity and if it's not in the list make it equal to one and add it to the list. if id didn't exist, add item with the id, if tit id exist, add that to the quantity.
  // displayCart = () => {
  //   let cart=[];


  // }

  getCountOfProduct = (product) => {
    let cart = [...this.state.cart];
    let tempList = [];
    var count = 0;
    for (let i of cart){
      tempList.push(i.name);
    }
    for(let i of tempList){
      if(i===product){
        count++;
      }
    }
    // cart.forEach(element => { if (element === product) { count += 1 } })
    this.setState({
      cart: cart
    })
    return count
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
            <Route exact path='/shop/cart' render={() => <ShopCart removeFromCart={this.removeFromCart} cart={this.state.cart} />} />
      
          </Switch>

        </main>

        <footer></footer>

      </div>
    )
  }
}