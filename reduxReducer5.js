const initialState = {
    products: [
        { name: "iPad 4", color: "", brand: "Mini", price: 500.01, qty: 2 },
        { name: "H&M 4", color: "White", brand: "T-Shirt", price: 10.99, qty: 10 },
        { name: "Charlie", color: "Sucker CD", brand: "XCX", price: 19.99, qty: 5 },
    ],
    cart: []
}

const reducer = (state = initialState, action) => {
    if (action.type === "ADDTOCART") return addtocart(state, action);
    if (action.type === "INC") return handleIncrement(state, action);
    if (action.type === "DEC") return handleDecrement(state, action);
    if (action.type === "REM") return handleRemove(state, action);
    return state;
}

const addtocart = (state, action) => {
    const { products, cart } = state;
    let fnd = products.find((ele) => ele.name === action.payload.name);
    if (fnd) {
        let product1 = products.map((ele) => ele.name === action.payload.name ? { ...ele, qty: ele.qty - 1 } : ele);
        let product2 = product1.filter((ele) => ele.qty > 0);

        let updatedCart = [];
        const existingCartItem = cart.find((item) => item.name === action.payload.name);

        if (existingCartItem) {
            updatedCart = cart.map((ele) =>
                ele.name === action.payload.name ? { ...ele, qty: ele.qty + 1 } : ele
            );
        } else {
            updatedCart = [...cart, { ...fnd, qty: 1 }];
        }
        return { ...state, products: product2, cart: updatedCart }
    }
    return state;
}

const handleIncrement = (state, action) => {
    const { cart } = state;
    let fnd = cart.find((ele) => ele.name === action.payload.name);
    if (fnd) {
        let cart1 = cart.map((ele) => ele.name === action.payload.name ? { ...ele, qty: ele.qty + 1 } : ele);
        return { ...state, cart: cart1 }
    }
    return state;
}

const handleDecrement = (state, action) => {
    const { cart } = state;
    let fnd = cart.find((ele) => ele.name === action.payload.name);
    if (fnd) {
        let cart1 = cart.map((ele) => ele.name === action.payload.name ? { ...ele, qty: ele.qty - 1 } : ele);
        let cart2 = cart1.filter((ele) => ele.qty > 0);
        return { ...state, cart: cart2 }
    }
    return state;
}

const handleRemove = (state, action) => {
    const { cart } = state;
    const indexToRemove = cart.findIndex((ele) => ele.name === action.payload.name);

    if (indexToRemove !== -1) {
        const updatedCart = [...cart.slice(0, indexToRemove), ...cart.slice(indexToRemove + 1)];
        return { ...state, cart: updatedCart };
    }

    return state;
};



export default reducer;