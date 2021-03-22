import { createStore, combineReducers } from 'redux';
import expenseReducers from '../reducers/expenses.js';
import filterReducer from '../reducers/filters';

export default () => {
    const store = createStore(combineReducers( // permet de conbiner les réducers qui permet de split le fonctionnement
        {
            expenses: expenseReducers,
            filter: filterReducer
        }
    ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}
