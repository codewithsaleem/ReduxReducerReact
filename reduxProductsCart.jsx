import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
    handleInc = (index) => {
        let fnd = this.props.cart[+index];
        this.props.dispatch(incAction(fnd.name))
    }
    handleDec = (index) => {
        let fnd = this.props.cart[+index];
        this.props.dispatch(decAction(fnd.name))
    }
    handleRemove = (index) => {
        let fnd = this.props.cart[+index];
        this.props.dispatch(remAction(fnd.name))
    }
    render() {
        let { cart } = this.props;
        let cartTotal = cart.length > 0 && cart.reduce((acc, curr) => acc + curr.price, 0);

        return (
            <div className="container">
                <h2>Your Cart</h2>
                {cart.length > 0 ? (
                    <div>
                        {cart.map((ele, index) => (
                            <div key={index}>
                                <p>
                                    {ele.name} ({ele.brand}, {ele.color}) - ${ele.price} x {ele.qty}
                                    <button onClick={() => this.handleInc(index)}>+</button>
                                    <button onClick={() => this.handleDec(index)}>-</button>
                                    <button onClick={() => this.handleRemove(index)}>x</button>
                                </p>
                            </div>
                        ))}
                        <p>Total: ${cartTotal}</p>
                        <button>Checkout</button>
                    </div>
                ) : (
                    <div>
                        <p>Please add some products to the cart.</p>
                        <p>Total: $0.00</p>
                        <button disabled>Checkout</button>
                    </div>
                )}
            </div>
        );
    }
}

const incAction = (name) => (
    {
        type: "INC",
        payload: {name: name}
    }
)
const decAction = (name) => (
    {
        type: "DEC",
        payload: {name: name}
    }
)
const remAction = (name) => (
    {
        type: "REM",
        payload: {name: name}
    }
)

const mapStateToProps = (state) => {
    return { cart: state.cart };
};

export default connect(mapStateToProps)(Cart);
