import React from 'react';
import { connect } from 'react-redux';
import { sortByAmount, sortByDate, setStartDate, setEndDate, setTextFilter } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value); // set dans le store les data avec le tri qu'on veux
    }
    onSortByChange = (e) => {
        switch (e.target.value) {
            case 'date':
                this.props.sortByDate();
            case 'price':
                this.props.sortByAmount();
        }
    }
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input type="text" className="text-input" placeholder="Search expenses" value={this.props.filter.text} onChange={this.onTextChange}></input>
                    </div>
                    <div className="input-group__item">
                        <select className="select" value={this.props.filter.sortBy} onChange={this.onSortByChange}>
                            <option value="date">Date</option>
                            <option value="price">Price</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filter.startDate}
                            endDate={this.props.filter.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                        />
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate)),
        setTextFilter: (text) => dispatch((setTextFilter(text))),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);