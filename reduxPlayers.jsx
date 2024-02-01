import React, { Component } from "react";
import { connect } from "react-redux";

class Players extends Component {
    handleIncr = (index) => {
        let fnd = this.props.players[+index]; 
        this.props.dispatch(scoreAction(fnd.name, fnd.score));
    }
    render() {
        let { players } = this.props;
      console.log("players", players)
        return (
            <div className="container text-center">
                {players.map((ele, index) => (
                    <div className="row" key={index}>
                        <div className="col">
                            <h5 className="text-primary">Name : {ele.name}</h5>
                            <h5 className="text-primary">Score : {ele.score}</h5>
                            <button className="btn btn-success mb-2" onClick={() => this.handleIncr(index)}>1 Point</button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

const scoreAction = (name, score) => (
    {
        type: "SCORE",
        payload: { name: name, score: score }
    }
)
const mapStateToProps = (state) => {
    return { players: state.players }
}
export default connect(mapStateToProps)(Players);