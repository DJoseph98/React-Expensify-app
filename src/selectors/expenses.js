import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? moment(startDate).isSameOrBefore(createdAtMoment):true; //avant ou date expense
        const endDateMatch = endDate ? moment(endDate).isSameOrAfter(createdAtMoment):true; //après ou date expense
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date')
            return a.createdAt < b.createdAt ? 1 : -1;
        else if (sortBy === 'price')
            return a.price < b.price ? 1 : -1;
    })
};