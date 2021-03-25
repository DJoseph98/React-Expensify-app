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

const jsx = ( // Provider permet de passer les données de store au composent principal
    <Provider store={store}> 
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
