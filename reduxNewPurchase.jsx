import React, { Component } from "react";
import { connect } from "react-redux";

class NewPurchaseComponent extends Component {
    state = {
        form1: { name: "", quantity: "" }
    }

    sell = () => {
       let {name, quantity} = this.state.form1;
       this.props.dispatch(buyAction(name, +quantity))
       this.setState({form1: { name: "", quantity: "" }})
    //    this.props.history.push("/stocks")
    }

    handleChange = (e) => {
        let {currentTarget: input} = e;
        let s1 = {...this.state};
        s1.form1[input.name] = input.value;
        this.setState(s1);
    }

    render() {
        let { name, quantity } = this.state.form1;

        return (
            <div className="container mt-3">
                <h2>New Purchase</h2>
                <div className="form-group">
                    <label>Fruit Name</label>
                    <select name="name" className="form-control" value={name} onChange={this.handleChange}>
                        <option value="">Select Fruits</option>
                        {this.props.fruits.map((ele, index) => (
                            <option value={ele} key={ele}>{ele}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Quantity</label>
                    <input
                        className="form-control"
                        type="text"
                        name="quantity"
                        value={quantity}
                        placeholder="Enter quantity"
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary mr-2" onClick={() => this.sell()}>New Purchase</button>
                </div>
            </div>
        )
    }
}

const buyAction = (name, quantity) => (
    {
        type: "BUY",
        payload: { name: name, quantity: quantity }
    }
)

const mapStateToProps = (state) => {
    return { fruits: state.fruits }
}
export default connect(mapStateToProps)(NewPurchaseComponent);