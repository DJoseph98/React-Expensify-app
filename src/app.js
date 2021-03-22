import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addState } from './actions/expenses';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore(); // instancier store

const action1 = store.dispatch(addState({ description: 'Water bill', price: 3, createdAt: moment().add('4', 'days').valueOf() }));
const action2 = store.dispatch(addState({ description: 'Gas bill', price: 1, createdAt: moment().add('4', 'days').valueOf() }));
const action3 = store.dispatch(addState({ description: 'Test bill', price: 2, createdAt: moment().add('4', 'days').valueOf() }));

const jsx = ( // Provider permet de passer les données de store au composent principal
    <Provider store={store}> 
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
