const initialState = {
    products: [
        { productName: "Coca Cola", code: "C352", price: 20, quantity: 10 },
        { productName: "5Star", code: "L332", price: 25, quantity: 16 },
        { productName: "Maggie", code: "F632", price: 22, quantity: 12 },
        { productName: "Pepsi", code: "S332", price: 28, quantity: 18 },
        { productName: "Diary Milk", code: "X312", price: 24, quantity: 14 },
        { productName: "Mirinda", code: "Z392", price: 23, quantity: 11 },
        { productName: "Kitkat", code: "Y432", price: 22, quantity: 16 },
        { productName: "Red Bull", code: "E333", price: 26, quantity: 20 },
    ]
}

const reducer = (state = initialState, action) => {
    if (action.type === "INCREASE") return handleIncr(state, action);
    else if (action.type === "DECREASE") return handleDecr(state, action);
    return state;
}

const handleDecr = (state, action) => {
    const {products} = state;
    let fnd = products.find((ele) => ele.code === action.payload.code);
    if(fnd) {
        let products1 = products.map((ele) => ele.code === action.payload.code ? {...ele, quantity: ele.quantity - 1} : ele);
        return {...state, products: products1};
    }
    return state;
}

const handleIncr = (state, action) => {
    const {products} = state;
    let fnd = products.find((ele) => ele.code === action.payload.code);
    if(fnd) {
        let products1 = products.map((ele) => ele.code === action.payload.code ? {...ele, quantity: ele.quantity + 1} : ele);
        return {...state, products: products1};
    }
    return state;
}
export default reducer;