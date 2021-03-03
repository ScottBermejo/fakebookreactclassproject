import React, { Component } from 'react'
import CartItem from '../../components/CartItem'


export default class ShopCart extends Component {
    render() {
        return (
            <div>
                <h3>Cart</h3>
                <hr />
                <div className=" table-responsive">
                    <table className="table table-striped table-inverse">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.cart.map((item, idx) => <CartItem removeFromCart={this.props.removeFromCart} key={idx} item={item} />)}
                            <tr>
                                <td colSpan="3"></td>
                                <td>
                                    <strong className="float-right">Subtotal</strong>
                                </td>
                                <td>
                                    <strong >$0.00</strong>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3"></td>
                                <td>
                                    <strong className="float-right">Tax</strong>
                                </td>
                                <td>
                                    <strong>$0.00</strong>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3"></td>
                                <td>
                                    <strong className="float-right">Grand Total</strong>
                                </td>
                                <td>
                                    <strong>$0.00</strong>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="4"></td>
                                <td>
                                    <a href="/" className="btn btn-success">Checkout</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
