import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('set default state reducer', () => {
    const action = {
        type: '@@INIT',
    }
    const result = filterReducer(undefined, action);
    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('set text filter reducer', () => {
    const state = {
        text: '1234',
        sortBy: 'text',
        startDate: undefined,
        endDate: undefined
    }
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'e'
    }
    const result = filterReducer(state, action);
    expect(result).toEqual({
        text: 'e',
        sortBy: 'text',
        startDate: undefined,
        endDate: undefined
    });
});

test('sort by price default reducer', () => {
    const action = { type: 'SORT_BY_AMOUNT', }
    const result = filterReducer(undefined, action);
    expect(result.sortBy).toBe('price');
});

test('sort by price reducer', () => {
    const state = {
        text: '',
        sortBy: 'text',
        startDate: undefined,
        endDate: undefined
    }
    const action = { type: 'SORT_BY_AMOUNT' }
    const result = filterReducer(state, action);
    expect(result.sortBy).toBe('price');
});

test('sort by date defaultreducer', () => {
    const action = { type: 'SORT_BY_DATE' }
    const result = filterReducer(undefined, action);
    expect(result.sortBy).toBe('date');
});

test('sort by date reducer', () => {
    const state = {
        text: '',
        sortBy: 'text',
        startDate: undefined,
        endDate: undefined
    }
    const action = { type: 'SORT_BY_DATE' }
    const result = filterReducer(state, action);
    expect(result.sortBy).toBe('date');
});

test('sort by startDate default reducer', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment()
    }
    const result = filterReducer(undefined, action);
    expect(result.startDate).toEqual(moment());
});

test('sort by startDate reducer', () => {
    const state = {
        text: '',
        sortBy: 'date',
        startDate: moment().add('1', 'days'),
        endDate: undefined
    }
    const action = {
        type: 'SET_START_DATE',
        startDate: moment()
    }
    const result = filterReducer(undefined, action);
    expect(result.startDate).toEqual(moment());
});

test('sort by endDate reducer default', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment()
    }
    const result = filterReducer(undefined, action);
    expect(result.endDate).toEqual(moment());
});

test('sort by endDate reducer', () => {
    const state = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment().add('1', 'days')
    }
    const action = {
        type: 'SET_END_DATE',
        endDate: moment()
    }
    const result = filterReducer(undefined, action);
    expect(result.endDate).toEqual(moment());
});
