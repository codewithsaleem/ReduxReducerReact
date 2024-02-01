import React, { Component } from "react";
import { connect } from "react-redux";
class ToDoList extends Component {
    deleteTask = (index) => {
        let fnd = this.props.todoList[+index];
        this.props.dispatch(deleteAction(fnd.name));
    }
    render() {
        let { todoList } = this.props;
        return (
            <div className="container">
                <ul>
                    {todoList.map((ele, index) => (
                        <React.Fragment>
                            <li>{ele.name}
                            <button onClick={() => this.deleteTask(index)}>X</button>
                            </li>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        )
    }
}

const deleteAction = (name) => (
    {
        type: "DELETETASK",
        payload: { name: name }
    }
)
const mapStateToProps = (state) => {
    return { todoList: state.todoList };
}
export default connect(mapStateToProps)(ToDoList);