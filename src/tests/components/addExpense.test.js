import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/addExpense';
import tabExpenses from '../fixtures/expenses';

let addStartState, history, wrapper;

beforeEach(() => { // éxécuter avant chanque expect
    addStartState = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addStartState={addStartState} history={history} />);
});

test('should render add form', () => {
    expect(wrapper).toMatchSnapshot();
});

test('add expense onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(tabExpenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addStartState).toHaveBeenLastCalledWith(tabExpenses[1]);
});
