import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilter } from '../../components/expenseListFilter';
import tabExpenses from '../fixtures/expenses';

test('expense list with passed data', () => {
    const wrapper = shallow(<ExpenseListe expenses={tabExpenses} />);
    expect(wrapper).toMatchSnapshot();
});