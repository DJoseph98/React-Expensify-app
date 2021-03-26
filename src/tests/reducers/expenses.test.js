import tabExpensesTest from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';
import moment from 'moment';

test('default state', () => {
    const result = expensesReducer(undefined, { type: '@@INIT' });
    expect(result).toEqual([]);
});

test('add expense', () => {
    const expense = {
        id: '109',
        square: '',
        description: 'Water Bill',
        price: '2500',
        createdAt: moment()
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const result = expensesReducer(tabExpensesTest, action);
    //expect(result[3]).toEqual(state);
    expect(result).toEqual([...tabExpensesTest, expense]);
});

test('edit state wrong id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        updates: {
            price: '0'
        }
    }
    const result = expensesReducer(tabExpensesTest, action);
    expect(result).toEqual(tabExpensesTest);
});

test('edit state', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: tabExpensesTest[1].id,
        updates: {
            square: 'dzadadaz',
            description: 'cast bill',
            price: '0',
            note: "",
            createdAt: moment()
        }
    }
    const result = expensesReducer(tabExpensesTest, action);
    expect(result[1]).toEqual(
        {
            id: tabExpensesTest[1].id,
            square: 'dzadadaz',
            description: 'cast bill',
            price: '0',
             note: "",
            createdAt: moment()
        }
    );
});

test('shoud set expenses', () => {
    const action = {
        type: 'SET_STATES',
        expenses: tabExpensesTest[0]
    }
    const result = expensesReducer(tabExpensesTest, action);
    expect(result).toEqual(tabExpensesTest[0]);
});