import { connect } from 'react-redux';
import React from 'react';
import ExpenseListeItem from './expenseListItem';
import filteredExpenses from '../selectors/expenses';

export const ExpenseListe = (props) => ( //component a render
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-dekstop">Expense</div>
            <div className="show-for-dekstop">Price</div>
        </div>
        <h2>Expenses List</h2>
        <div className="list-body">
            {props.expenses.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No expenses</span>
                </div>
            ) : (
                <u1>
                    {props.expenses.map(expense => <ExpenseListeItem key={expense.id}{...expense} />)}
                </u1>
            )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => { // maps les valeurs de state au variables du template
    return {
        expenses: filteredExpenses(state.expenses, state.filter)
    }
};

export default connect(mapStateToProps)(ExpenseListe); //connect les variables redux store avec les variables du template



