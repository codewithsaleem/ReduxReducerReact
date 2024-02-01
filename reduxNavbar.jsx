import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to="/" className="navbar-brand ms-3">Redux Sample App</Link>

                <div className="">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/stocks" className="nav-link">Stocks</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/orders" className="nav-link">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/purchases" className="nav-link">Purchases</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/newSale" className="nav-link">New Sale</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/newPurchase" className="nav-link">New Purchase</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;