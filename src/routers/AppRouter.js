import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from '../components/header';
import DashboardPage from '../components/dashboard';
import AddExpensePage from '../components/addExpense';
import EditExpensePage from '../components/editExpense';
import LoginPage from '../components/loginPage';
import NotFoundPage from '../components/notFoundPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} exact={true} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;