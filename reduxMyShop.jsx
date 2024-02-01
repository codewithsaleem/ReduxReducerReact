import React, { Component } from "react";
import { connect } from "react-redux";

class MyShop extends Component {
    clikDecrement = (index) => {
        let fnd = this.props.products[+index];
        this.props.dispatch(decrementAction(fnd.code));
    }
    clikIncrement = (index) => {
        let fnd = this.props.products[+index];
        this.props.dispatch(incrementAction(fnd.code));
    }
    render() {
        let { products } = this.props;
        return (
            <div className="container text-center">
                <div className="row text-center">
                    {products.map((ele, index) => (
                        <div className="col-sm-3 bg-info m-1">
                            {ele.productName} <br />
                            Code : {ele.code} <br />
                            Price : {ele.price} <br />
                            Quantity : {ele.quantity} <br />
                            <button className="m-1 btn-outline-light text-dark" onClick={() => this.clikIncrement(index)}>Increase</button>
                            <button className="m-1 btn-outline-light text-dark" onClick={() => this.clikDecrement(index)} disabled={ele.quantity === 0}>
                                Decrease
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const incrementAction = (code) => (
    {
        type: "INCREASE",
        payload: { code: code }
    }
)

const decrementAction = (code) => (
    {
        type: "DECREASE",
        payload: { code: code }
    }
)

const mapStateToProps = (state) => {
    return { products: state.products }
}
export default connect(mapStateToProps)(MyShop);