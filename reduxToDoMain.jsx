import React, { Component } from "react";
import ToDoForm from "./reduxToDoForm";
import ToDoList from "./reduxToDoArray";
class MainComponent extends Component {
    render() {
        return (
            <div className="container">
                <ToDoForm />
                <ToDoList />
            </div>
        )
    }
}
export default MainComponent;