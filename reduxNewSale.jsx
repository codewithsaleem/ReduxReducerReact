import React, { Component } from "react";
import { connect } from "react-redux";

class NewSaleComponent extends Component {
    state = {
        form1: { name: "", quantity: "" }
    }

    sell = () => {
        let { name, quantity } = this.state.form1;
        this.props.dispatch(sellAction(name, +quantity))
        this.setState({form1: { name: "", quantity: "" }})
        // this.props.history.push("/stocks")
    }

    handleChange = (e) => {
        let { currentTarget: input } = e;
        let s1 = { ...this.state };
        s1.form1[input.name] = input.value;
        this.setState(s1);
    }

    render() {
        let { name, quantity } = this.state.form1;
        let qtyOption = [];
        if (name) {
            let sellFruit = this.props.stocks.find((ele) => ele.name === name);
            if (sellFruit) {
                let maxQty = sellFruit.quantity;
                for (let i = 0; i <= maxQty; i++) qtyOption.push(i);
            }
        }
        return (
            <div className="container mt-3">
                <h2>New Sale</h2>
                <div className="form-group">
                    <label>Fruit Name</label>
                    <select name="name" className="form-control" value={name} onChange={this.handleChange}>
                        <option value="">Select Fruits</option>
                        {this.props.stocks.map((ele, index) => (
                            <option value={ele.name} key={ele.name}>{ele.name}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Quantity</label>
                    <select name="quantity" className="form-control" value={quantity} onChange={this.handleChange}>
                        <option value="">Select Quantity</option>
                        {qtyOption.map((ele, index) => (
                            <option value={ele} key={ele}>{ele}</option>
                        ))}
                    </select>
                </div>


                <div className="form-group">
                    <button className="btn btn-primary mr-2" onClick={() => this.sell()}>New Sale</button>
                </div>
            </div>
        )
    }
}

const sellAction = (name, quantity) => (
    {
        type: "SELL",
        payload: { name: name, quantity: quantity }
    }
)

const mapStateToProps = (state) => {
    return { stocks: state.stocks }
}
export default connect(mapStateToProps)(NewSaleComponent);