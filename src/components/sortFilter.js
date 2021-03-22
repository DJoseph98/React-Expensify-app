import React from 'react';
import { connect } from 'react-redux';
import { sortByAmount, sortByDate } from '../actions/filters';
const SortBy = ({ dispatch }) => (
    <div>
        <select name="sortBy" onChange={(e) => {
            switch (e.target.value) {
                case 'date':
                    dispatch(sortByDate())
                case 'amount':
                    dispatch(sortByAmount())
            }
        }}>
            <option value=""></option>
            <option value="date">date</option>
            <option value="amount">amount</option>
        </select>
    </div>
);

export default connect()(SortBy);
