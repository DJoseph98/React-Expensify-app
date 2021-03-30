import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header>
        <h1>Property Page</h1>
        <NavLink to="/dashboard" activeClassName="is-active">Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <button onClick={startLogout}>Log out</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);