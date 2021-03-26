import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { setStartStates} from './actions/expenses';

const store = configureStore(); // instancier store

const jsx = ( // Provider permet de passer les données de store au composent principal
    <Provider store={store}> 
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(setStartStates()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

