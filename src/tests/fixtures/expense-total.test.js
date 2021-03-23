import tabExpenses from './expenses';
import getTotalExpense from '../../selectors/expense-total';

test('sould return 0 if empty', () => {
    const result = getTotalExpense([]);
    expect(result).toBe(0);

});

test('sould add single expense if single', () => {
    const result = getTotalExpense([tabExpenses[1]]);
    expect(result).toBe(25000);

});


test('sould return addition if multi', () => {
    const result = getTotalExpense(tabExpenses);
    expect(result).toBe(27520);

});


