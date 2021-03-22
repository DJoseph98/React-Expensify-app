import filteredExpenses from '../../../selectors/expenses';
import moment from 'moment';
import tabExpensesTest from '../../fixtures/expenses';

test('filter by text', () => {
    const filter = {
        text: 'e',
        sortBy: 'text',
        startDate: undefined,
        endDate: undefined
    };
    const result = filteredExpenses(tabExpensesTest, filter);
    expect(result).toEqual([tabExpensesTest[0]]);

});
test('filter by startDate', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = filteredExpenses(tabExpensesTest, filter);
    expect(result).toEqual([tabExpensesTest[2], tabExpensesTest[0]]);
});

test('filter by endDate', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };
    const result = filteredExpenses(tabExpensesTest, filter);
    expect(result).toEqual([tabExpensesTest[0], tabExpensesTest[1]]);
});

test('sort by date', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = filteredExpenses(tabExpensesTest, filter);
    expect(result).toEqual([tabExpensesTest[2], tabExpensesTest[0], tabExpensesTest[1]]);
});

test('sort by price', () => {
    const filter = {
        text: '',
        sortBy: 'price',
        startDate: undefined,
        endDate: undefined
    };
    const result = filteredExpenses(tabExpensesTest, filter);
    expect(result).toEqual([tabExpensesTest[1], tabExpensesTest[0], tabExpensesTest[2]]);
});
