import React, { Component } from "react";
import { connect } from "react-redux";

class PurchasesComponent extends Component {
    render() {
        return (
            <div className="container">
                <h2>Purchases</h2>
                {this.props.stocks.map((ele, index) => (
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
    return { stocks: state.stocks }
}
export default connect(mapStateToProps)(PurchasesComponent);