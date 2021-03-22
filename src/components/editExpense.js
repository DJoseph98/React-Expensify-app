import React from 'react';
import ExpenseForm from './expenseForm';
import { connect } from 'react-redux';
import { editState, removeState } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editState(this.props.expense.id, expense); //edit expense
        this.props.history.push('/'); // redirect to route
    }
    onRemove = () => {
        this.props.removeState(({ id: this.props.expense.id }));
        this.props.history.push('/'); // redirect to route
    }
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit} />
                <button onClick={this.onRemove}>Remove</button>
            </div>)
    }
}

const MapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(element => element.id === props.match.params.id) // retourne expense par id qu'on souhaite
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editState: (id, expense) => dispatch(editState(id, expense)),
        removeState: (data) => dispatch(removeState(data))
    }
}

export default connect(MapStateToProps/*state*/, mapDispatchToProps/*dispatch*/)(EditExpensePage);