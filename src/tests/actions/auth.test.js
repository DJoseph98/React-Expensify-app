import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
    const uid = '123';
    const loginResult = login(uid);
    expect(loginResult).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should generate logout action object', () => {
    const logoutResult = logout();
    expect(logoutResult.type).toBe('LOGOUT');
});

