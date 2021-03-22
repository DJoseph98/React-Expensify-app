import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListeItem } from '../../components/expenseListItem';
import tabExpenses from '../fixtures/expenses';

test('expense list item', () => {
    const wrapper = shallow(<ExpenseListeItem key={tabExpenses[1].id}{...tabExpenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

