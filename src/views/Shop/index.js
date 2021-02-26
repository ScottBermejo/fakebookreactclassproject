import React, { Component } from 'react'
import Product from '../../components/Product'

export default class Shop extends Component {
    constructor() {
        super();

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        // This is the wrong way of changing your data
        // this.state.things = [1, 2, 3, 4, 5, 6];

        fetch('http://localhost:5000/api/shop')
            .then(res => res.json())
            .then(data => this.setState({
                products: data
            }))

        // This is the right way
        this.setState({
            products: [1, 2, 3, 4, 5, 6]
        })
    }

    render() {

        return (
            <div>
                <h4>Shop</h4>
                <hr />
                <div class="card-deck">
                    {this.state.products.map((p, idx) => <Product info={p} key={idx} />)}
                </div>
            </div>
        )
    }
}
