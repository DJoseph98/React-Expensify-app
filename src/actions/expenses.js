import database from '../firebase/firebase';
import moment from 'moment';

export const addState = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const addStartState = (expenseData = {}) => { // custom middleware pour ajouter nouvelle fonction a appeler pour ajouter une data a redux store
    return (dispatch) => { // retourne une fonction avec dispatch
        const {
            description = '',
            square = 0,
            price = 0,
            createdAt = 1000
        } = expenseData;
    
        const expense = { description, square, price, createdAt };
        
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch.addState({
                id: ref.key,
                ...expense
            });
        });
    };
};

export const removeState = ({ id } = {} /* set valeur default mais rend obligatoire l'argument*/) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    }
);

export const editState = (id, updates) => (
    {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
);
