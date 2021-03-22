const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, // recréer un tableau avec toute les entités de state
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            const idFound = state.find(({ id }) => id === action.id) ? true : false;
            if (idFound)
                return state.filter(({ id }) => id !== action.id); // recréer un tableau avec toute les entités de state
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id)
                    return { //object destructuring
                        ...expense, // récupère les données d'expense
                        ...action.updates // update uniquement les données souhaité (mount)
                    };
                else {
                    return expense;
                }
            })
        default:
            return state;
    }
}

//export default expenseReducers;