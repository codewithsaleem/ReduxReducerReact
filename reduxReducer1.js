const initialState = {
    fruits: ["Apple", "Banana", "Orange", "Guava"],
    stocks: [],
    orders: [],
    purchases: [],
};

const reducer = (state = initialState, action) => {
    if (action.type === "BUY") return buyReducer(state, action);
    if (action.type === "SELL") return sellReducer(state, action);

    return state;
}

const sellReducer = (state, action) => {
    const { stocks, orders } = state;
    let st = stocks.find((ele, index) => ele.name === action.payload.name);
    if (st) {
        let stocks1 = stocks.map((ele) => ele.name === action.payload.name ? { ...ele, quantity: ele.quantity - action.payload.quantity } : ele);
        let stocks2 = stocks1.filter((ele) => ele.quantity > 0)
        let orders1 = [...orders, action.payload];
        return { ...state, stocks: stocks2, orders: orders1 }
    }
    return state;
}

const buyReducer = (state, action) => {
    const { stocks, purchases } = state;

    let st = stocks.find((ele, index) => ele.name === action.payload.name);
    let stocks1 = null;
    if (st) {
        stocks1 = stocks.map((ele) => ele.name === action.payload.name ? { ...ele, quantity: ele.quantity + action.payload.quantity } : ele);
    } else {
        stocks1 = [...stocks, action.payload];
    }
    let purchases1 = [...purchases, action.payload];
    return { ...state, stocks: stocks1, purchases: purchases1 }
}

export default reducer;