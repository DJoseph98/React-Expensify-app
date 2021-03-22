import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListe } from '../../components/expenseList';
import tabExpenses from '../fixtures/expenses';

test('expense list with passed data', () => {
    const wrapper = shallow(<ExpenseListe expenses={tabExpenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('expense list with no passed data', () => {
    const wrapper = shallow(<ExpenseListe expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});

