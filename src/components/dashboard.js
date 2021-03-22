import React from 'react';
import ExpenseListe from './expenseList';
import ExpenseListFilter from './expenseListFilter';
import SortBy from './sortFilter';

const DashboardPage = () => (
    <div>
        <ExpenseListFilter />
        <ExpenseListe />
    </div>
);

export default DashboardPage;