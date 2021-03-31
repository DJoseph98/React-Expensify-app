import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeState } from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListeItem = ({ dispatch, id, description, price, createdAt }) => ( //component a render
        <Link className="list-item" to={`/edit/${id}`}>
                <div>
                        <h3 className="list-item__title">{description}</h3>
                        <span className="list-item__sub-title">{moment(createdAt).format("MM-DD-YYYY")}</span>
                </div>
                <h3 className="list-item__data">{numeral(price).format('$0,0.00')}</h3>
        </Link>
);

export default connect()(ExpenseListeItem);


