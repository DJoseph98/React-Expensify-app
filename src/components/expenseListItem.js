import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeState } from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListeItem = ({ dispatch, id, description, price, createdAt }) => ( //component a render
        <li >
                <Link to={`/edit/${id}`}>Description : {description}</Link>
         - Price : {numeral(price).format('$0,0.00')} - createdAt : {moment(createdAt).format("MM-DD-YYYY")}
        </li>
);

export default connect()(ExpenseListeItem);


