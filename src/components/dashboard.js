import React from 'react';
import ExpenseListe from './expenseList';
import ExpenseListFilter from './expenseListFilter';
import ExpenseSummary from './expenseSummary';
import SortBy from './sortFilter';

const DashboardPage = () => (
    <div>
        <ExpenseSummary />
        <ExpenseListFilter />
        <ExpenseListe />
    </div>
);

export default DashboardPage;