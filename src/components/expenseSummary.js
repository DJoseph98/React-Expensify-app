import React from 'react';
import { connect } from 'react-redux';
import getTotalExpense from '../selectors/expense-total';
import filteredExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpenseSummary = ({ expenseCount, expenseTotal}) => (
    <div>
      Total expenses : {expenseCount}

      {expenseTotal !== 0 && <div>Total amount expenses : {numeral(expenseTotal).format('$0,0.00')} </div>}
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