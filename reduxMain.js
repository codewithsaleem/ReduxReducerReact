import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./reduxNavbar";
import StocksComponent from "./reduxStocks";
import NewPurchaseComponent from "./reduxNewPurchase";
import OrdersComponent from "./reduxOrders";
import PurchasesComponent from "./reduxPurchase";
import NewSaleComponent from "./reduxNewSale";

class MainComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4 border bg-warning">
                        <StocksComponent />
                    </div>
                    <div className="col-4 border bg-warning">
                        <OrdersComponent />
                    </div>
                    <div className="col-4 border bg-warning">
                        <PurchasesComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 border bg-dark text-white">
                        <NewSaleComponent />
                    </div>
                    <div className="col-6 border bg-dark text-white">
                        <NewPurchaseComponent />
                    </div>
                </div>
                {/* <Navbar />
                <Switch>
                    <Route path="/stocks" component={StocksComponent} />
                    <Route path="/orders" component={OrdersComponent} />
                    <Route path="/purchases" component={PurchasesComponent} />
                    <Route path="/newSale" component={NewSaleComponent} />
                    <Route path="/newPurchase" component={NewPurchaseComponent} />
                    <Redirect from="/" to="/newSale" />
                </Switch> */}
            </div>
        )
    }
}
export default MainComponent;