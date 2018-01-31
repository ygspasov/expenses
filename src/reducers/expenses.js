//Expenses reducer
const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {

    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]

        case 'REMOVE_EXPENSE':
            return state.filter((expense) => {
                return expense.id !== action.id
            })

        case 'EDIT_EXPENSE':
            let amount = action.amount
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        amount
                    }
                } else {
                    return expense
                }
            })

        default: return state;
    }
}

