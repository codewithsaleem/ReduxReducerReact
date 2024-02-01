const initialState = {
    todoList: []
}

const reducer = (state = initialState, action) => {
    if (action.type === "ADDTASK") return addTask(state, action);
    else if (action.type === "DELETETASK") return deleteTask(state, action);
    return state;
}

const addTask = (state, action) => {
    const { todoList } = state;
    let todoList1 = [...todoList, action.payload];
    return { ...state, todoList: todoList1 }
}

const deleteTask = (state, action) => {
    const { todoList } = state;
    const updatedTodoList = todoList.filter((task) => task.name !== action.payload.name);
    return { ...state, todoList: updatedTodoList };
}

export default reducer;