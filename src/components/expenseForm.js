import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props); // récupère ce qui est passé dans le parent
        this.state= { // set données si existe dans parent
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.note : '',
            price: props.expense ? (props.expense.price / 100).toString() : '',
            calendarFocused: false,
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onPriceChange = (e) => {
        const price = e.target.value;
        if (price && price.match(/^\d{1,}(\.\d{0,2})?$/)) // récupère uniquement les chiffre et décimal si existe
            this.setState(() => ({ price }));
    };
    onDateChange = (createdAt) => {
        if (createdAt)
            this.setState(() => ({ createdAt }));
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    handleSubmitForm = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.price) {
            this.setState(() => ({ error: 'Please provide description and amount' }));
        } else {
            this.props.onSubmit({ // fonction du parent ou on lui envoie les nouvelles données
                description: this.state.description,
                price: parseFloat(this.state.price, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note ? this.state.note : ''  //car firebase n'aime pas des undefined
            });
        }
    };
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmitForm}>
                    <input type="text"
                        name="description"
                        placeholder="description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange} />
                    <input type="text"
                        name="price"
                        placeholder="price"
                        value={this.state.price}
                        onChange={this.onPriceChange} />
                    <textarea
                        placeholder="Add note here"
                        onChange={this.onNoteChange}
                        value={this.state.note}
                    ></textarea>
                    <SingleDatePicker //set SingleDatePicker https://github.com/airbnb/react-dates
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false} />
                    <button>Test</button>
                </form>
            </div>
        )
    }
}