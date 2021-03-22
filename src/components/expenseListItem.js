import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeState } from '../actions/expenses';

export const ExpenseListeItem = ({ dispatch, id, description, price, createdAt }) => ( //component a render
        <li >
                <Link to={`/edit/${id}`}>Description : {description}</Link>
         - Price : {price} - createdAt : {createdAt}
        </li>
);

export default connect()(ExpenseListeItem);


