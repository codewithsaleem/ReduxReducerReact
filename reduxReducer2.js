const initialState = {
    players: [
        { name: "Jack", score: 21 },
        { name: "Steve", score: 25 },
        { name: "Martha", score: 27 },
        { name: "Bob", score: 23 },
        { name: "Edwards", score: 29 },
    ]
}

const reducer = (state = initialState, action) => {
    if (action.type === "SCORE") return incrementScore(state, action);
    return state;
}

const incrementScore = (state, action) => {
    let { players } = state;
    let fnd = players.find((ele) => ele.name === action.payload.name);
    if (fnd) {
        let fnd1 = players.map((ele) => ele.name === action.payload.name ? { ...ele, score: ele.score + 1 } : ele);
        return { ...state, players: fnd1 };
    }
    return state;
}

export default reducer;