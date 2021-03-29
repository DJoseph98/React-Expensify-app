import React from 'react';
import ExpenseForm from './expenseForm';
import { connect } from 'react-redux';
import { startEditState, removeStartState } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditState(this.props.expense.id, expense); //edit expense
        this.props.history.push('/'); // redirect to route
    }
    onRemove = () => {
        this.props.removeStartState(({ id: this.props.expense.id }));
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
        startEditState: (id, expense) => dispatch(startEditState(id, expense)),
        removeStartState: (data) => dispatch(removeStartState(data))
    }
}

export default connect(MapStateToProps/*state*/, mapDispatchToProps/*dispatch*/)(EditExpensePage);