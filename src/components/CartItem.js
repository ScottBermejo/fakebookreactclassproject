import React, { Component } from 'react'


export default class CartItem extends Component {
    render() {
        const item = this.props.item;
        // item.quantity = this.props.getCountOfProduct(item);
        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                    <form>
                        <input type="hidden" name="product_id" defaultValue="" /> 
                        {/* give quantity to javacsript object */}
                        <div className="form-row">
                            <div className="col-md-6">
                                <input name="update" type="number" min="0" max="99" className="form-control" defaultValue={item.Quantity}/>
                                {/* defualt value will be given item.quantity*/}
                            </div>
                            <div className="col-md-3">
                                {/* <input type="update" nameclassName="btn btn-info" defaultValue="Update"/> */}
                                {/* <button id="update" className="btn btn-info">Update</button> */}
                                {/* onClick={() => this.props.updateCart(item)} */}
                            </div>
                        </div>
                    </form>
                </td>
                <td>
                    <button onClick={() => this.props.removeFromCart(item)} className="btn btn-info">
                        {/* <button onClick={() => this.props.removeFromCart(product)} className="btn btn-danger"> */}
                        {/* when deleting item, set item.quantity to what the number is*/} 
                        Update
                                    <span>
                            <i className="fa fa-trash"></i>
                        </span>
                    </button>
                </td>
            </tr>
        )
    }
}
