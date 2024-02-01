import React, { Component } from "react";
import { connect } from "react-redux";
class ToDoList extends Component {
    state = {
        form1: { name: "" }
    }

    addTodo = () => {
        let { name } = this.state.form1;
        this.props.dispatch(addAction(name));
        this.setState({ form1: { name: "" } })
    }

    handleChange = (e) => {
        let { currentTarget: input } = e;
        let s1 = { ...this.state };
        s1.form1[input.name] = input.value;
        this.setState(s1);
    }

    render() {
        let { name } = this.state.form1;
        return (
            <div className="container text-center mt-4">
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="form-group">
                            <button onClick={() => this.addTodo()}>Add Todo</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const addAction = (name) => ({
    type: "ADDTASK",
    payload: { name: name }
})
const mapStateToProps = (state) => {
    return { totdoList: state.totdoList };
}
export default connect(mapStateToProps)(ToDoList);