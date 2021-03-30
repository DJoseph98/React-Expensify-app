import React from 'react';
import { connect } from 'react-redux';
import { addState } from '../actions/expenses';

const ExpenseForm = ({ dispatch }) => (
    <div>
        <form name="expenseForm" onSubmit={e => { e.preventDefault(); handleSubmitForm(e, dispatch) }}>
            <input type="text" name="square"></input>
            <input type="text" name="description"></input>
            <input type="text" name="price"></input>
            <input type="text" name="createdAt"></input>
            <button>Test</button>
        </form>
    </div>
)

const handleSubmitForm = (e, dispatch) => {
    const jsonData = {
        square: e.target.square.value,
        description: e.target.description.value,
        price: e.target.price.value,
        createdAt: e.target.createdAt.value
    };

    dispatch(addState(jsonData));
};

export default connect()(ExpenseForm);