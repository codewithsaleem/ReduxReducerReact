import React, { Component } from "react";
import Players from "./reduxPlayers";
class MainComponent extends Component {
    render() {
        return (
            <div className="container">
                <Players />
            </div>
        )
    }
}
export default MainComponent;