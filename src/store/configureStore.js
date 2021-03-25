import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expenseReducers from '../reducers/expenses.js';
import filterReducer from '../reducers/filters';
import thunk from 'redux-thunk'; // permet de dispatch une fonction à la palce d'un object pour reduxd

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

export default () => {
    const store = createStore(
        combineReducers({ // permet de conbiner les réducers qui permet de split le fonctionnement
            expenses: expenseReducers,
            filter: filterReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}
