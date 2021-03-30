import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { MemoryRouter } from 'react-router-dom';

export const LoginPage = ({ startLogin }) => (
    <div>
        <button onClick={startLogin}>Login Page</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);