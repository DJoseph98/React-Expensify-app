import React from 'react';
import { connect } from 'react-redux';
import getTotalExpense from '../selectors/expense-total';
import filteredExpenses from '../selectors/expenses';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">
                Total expenses : <span>{expenseCount}</span>

                {expenseTotal !== 0 && <div>Total amount expenses : <span>{numeral(expenseTotal).format('$0,0.00')}</span> </div>}
            </h1>

            <div className="page-header__actions">
                <Link className="button" to="/create">Add expense</Link>
            </div>
        </div>
    </div>
)

const mapStateToProps = (state) => { // maps les valeurs de state au variables du template
    const visibleExpenses = filteredExpenses(state.expenses, state.filter);

    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: getTotalExpense(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpenseSummary);