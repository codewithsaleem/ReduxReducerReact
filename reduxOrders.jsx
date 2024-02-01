import React, { Component } from "react";
import { connect } from "react-redux";

class OrdersComponent extends Component {
    render() {
        return (
            <div className="container">
                <h2>Orders</h2>
                {this.props.orders.map((ele, index) => (
                    <div className="row" key={index}>
                        <div className="col-4 border">{ele.name}</div>
                        <div className="col-2 border">{ele.quantity}</div>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { orders: state.orders }
}
export default connect(mapStateToProps)(OrdersComponent);