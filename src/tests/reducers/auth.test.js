import authReducer from '../../reducers/auth';

test('sould set uid for login', () => {
    const action = { type: 'LOGIN', uid: '123' };
    const result = authReducer({}, action);
    expect(result.uid).toBe('123');
});

test('sould clear uid for logout', () => {
    const action = { type: 'LOGOUT' };
    const result = authReducer({uid: 'anything'}, action);
    expect(result).toEqual({});
});