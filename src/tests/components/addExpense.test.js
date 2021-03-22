import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/addExpense';
import tabExpenses from '../fixtures/expenses';

let addState, history, wrapper;

beforeEach(() => { // éxécuter avant chanque expect
    addState = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addState={addState} history={history} />);
});

test('should render add form', () => {
    expect(wrapper).toMatchSnapshot();
});

test('add expense onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(tabExpenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addState).toHaveBeenLastCalledWith(tabExpenses[1]);
});
