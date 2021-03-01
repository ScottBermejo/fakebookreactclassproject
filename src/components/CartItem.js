import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        const item = this.props.item;

        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                    <form>
                        <input type="hidden" name="product_id" defaultValue="" />
                        <div className="form-row">
                            <div className="col-md-4">
                                <input type="number" min="0" max="99" className="form-control" name="quantity" defaultValue="" />
                            </div>
                            <div className="col-md-3">
                                <input type="submit" className="btn btn-info" defaultValue="Update" />
                            </div>
                        </div>
                    </form>
                </td>
                <td>
                    <a href="/" className="btn btn-danger">
                        Delete
                                    <span>
                            <i className="fa fa-trash"></i>
                        </span>
                    </a>
                </td>
            </tr>
        )
    }
}
