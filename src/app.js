import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { setStartStates } from './actions/expenses';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';
import LoadingPage from './components/loadingPage';

const store = configureStore(); // instancier stores

const jsx = ( // Provider permet de passer les données de store au composent principal
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => { // fonction permet de savoir si le react dom est display
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => { //check si user connected
    if (user) { // is user connecter
        store.dispatch(login(user.uid)); //store user id
        store.dispatch(setStartStates()).then(() => {
            renderApp(); //render app
            if(history.location.pathname === '/'){ // redirect uniquement si on est sur '/', 
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

