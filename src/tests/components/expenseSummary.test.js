import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/expenseSummary';

test('viewing 2 expenses list', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={0} expenseTotal={10} />);
    expect(wrapper).toMatchSnapshot();
});

test('viewing 3 expenses list', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expenseTotal={1051515} />);
    expect(wrapper).toMatchSnapshot();
});