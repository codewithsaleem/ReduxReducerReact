const initialState = {
    stocks: [
        { name: "Apple", quantity: 2 },
        { name: "Banana", quantity: 5 },
        { name: "Orange", quantity: 7 },
    ],
    numOfOrders: 0,
    totalOrderQty: 0,
};

// action : type === "SELL"

const reducer = (state = initialState, action) => {
    console.log("In reducer : State : ", state, "Action", action);
    if (action.type === "SELL") {
        const { stocks, numOfOrders, totalOrderQty } = state.stocks;
        let stocks1 = stocks.map((ele) => ele.name === action.payload.name ? { ...ele, quantity: ele.quantity - 1 } : ele);
        let stocks2 = stocks1.filter((ele) => ele.quantity > 0);
        return {...state, stocks: stocks2, numOfOrders: numOfOrders + 1, totalOrderQty: totalOrderQty + 1 }
    }
    else if (action.type === "BUY") {
        const stocks = state.stocks;
        let st = stocks.find((st) => st.name === action.payload.name);
        let stocks1 = null;
        if (st) {
            stocks1 = stocks.map((item) => (
                item.name === action.payload.name
                    ? { ...item, quantity: item.quantity + action.payload.quantity }
                    : item
            ))
        } else {
            stocks1 = [...stocks, { ...action.payload }];
        }
        return { stocks: stocks1 };
    }
    return state;
}

export default reducer;