import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addStartState } from '../actions/expenses';
import ExpenseForm from './expenseForm';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        //props.dispatch(addState(expense)); // difficile de tester comme ça donc on change
        this.props.addStartState(expense);// plus facile de tester la fonction maintenant
        this.props.history.push('/'); // redirect to route
    }
    render() {
        return (
            <div>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => { // surchage la fonction pour permettre de facilité le testing
    return {
        addStartState: (expense) => dispatch(addStartState(expense))
    }
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);