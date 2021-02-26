import React, { Component } from 'react'
import Product from '../../components/Product'

export default class Shop extends Component {
        render() {

        return (
            <div>
                <h4>Shop</h4>
                <hr />
                <div className="card-deck">
                    {this.props.products.map((p, idx) => <Product addToCart={this.props.addToCart} info={p} key={idx} />)}
                </div>
            </div>
        )
    }
}
