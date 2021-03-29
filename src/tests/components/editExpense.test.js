import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/editExpense';
import tabExpenses from '../fixtures/expenses';

let removeStartState, startEditState, history, wrapper;

beforeEach(() => { // éxécuter avant chanque expect
    startEditState = jest.fn(); // spy
    removeStartState = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage startEditState={startEditState} removeStartState={removeStartState} history={history} expense={tabExpenses[1]}/>);
});

test('should render edit form', () => {
    expect(wrapper).toMatchSnapshot();
});

test('edit expense onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(tabExpenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditState).toHaveBeenLastCalledWith(tabExpenses[1].id, tabExpenses[1]);
});

test('remove expense onSubmit', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeStartState).toHaveBeenLastCalledWith({
        id: tabExpenses[1].id
    });
});

