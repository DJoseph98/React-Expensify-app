import moment from 'moment';
import { sortByAmount, sortByDate, setTextFilter, setStartDate, setEndDate } from '../../actions/filters';

test('sort amount', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});
test('sort date', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    })
});
test('set text filter', () => {
    const text = 'test';
    const result = setTextFilter(text);
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    })
});
test('set text filter default', () => {
    const result = setTextFilter();
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});
test('set start date', () => {
    const result = setStartDate(moment(0));
    expect(result).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});
test('set end date', () => {
    const result = setEndDate(moment(0));
    expect(result).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});