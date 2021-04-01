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
       if(confirm("Are you sure ?")){
        this.props.removeStartState(({ id: this.props.expense.id }));
        this.props.history.push('/'); // redirect to route
       }
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit} />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
                </div>
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