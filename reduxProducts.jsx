import React, { Component } from "react";
import { connect } from "react-redux";

class Products extends Component {
    addToCart = (index) => {
        let fnd = this.props.products[+index];
        this.props.dispatch(addAction(fnd.name));
        this.props.history.push("/cart");
    }
    render() {
        let {products} = this.props;
        
        return (
            <div className="container mt-3">
                <h2>Products</h2>
               {products.map((ele, index) => (
                   <div className="row mb-3" key={index}>
                        <div className="">
                            {ele.name} {ele.brand} {ele.color} - ${ele.price} x {ele.qty} <br />
                            <button onClick={() => this.addToCart(index)}>Add To Cart</button>
                        </div>
                   </div>
               ))}
            </div>
        )
    }
}

const addAction = (name) => (
    {
        type: "ADDTOCART",
        payload: {name: name}
    }
)
const mapStateToProps = (state) => {
    return { products: state.products }
}
export default connect(mapStateToProps)(Products);