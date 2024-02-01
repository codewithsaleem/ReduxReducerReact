import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Products from "./reduxProducts";
import Cart from "./reduxProductsCart";
class MainComponent extends Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route path="/products" component={Products}/>
                    <Route path="/cart" component={Cart}/>
                    <Redirect from="/" to="/products" />
                </Switch>
            </div>
        )
    }
}
export default MainComponent;