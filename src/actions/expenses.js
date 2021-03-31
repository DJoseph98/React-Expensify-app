import database from '../firebase/firebase';
import moment from 'moment';

export const addState = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const addStartState = (expenseData = {}) => { // custom middleware pour ajouter nouvelle fonction a appeler pour ajouter une data a redux store
    return (dispatch, getState) => { // retourne une fonction avec dispatch
        const uid = getState().auth.uid;
        const {
            description = '',
            note = 0,
            price = 0,
            createdAt = 1000
        } = expenseData;

        const expense = { description, note, price, createdAt };

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addState({
                id: ref.key,
                ...expense
            }));
        });
    };
};

export const editState = (id, updates) => (
    {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
);

export const startEditState = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editState(id, updates));
        }).catch((e) => {
            console.log(e);
        });
    };
};

export const setStates = (expenses) => (
    {
        type: 'SET_STATES',
        expenses
    }
);

export const setStartStates = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const tabExpenses = [];

            snapshot.forEach(expense => {
                tabExpenses.push({
                    id: expense.key,
                    ...expense.val()
                })
            });
            dispatch(setStates(tabExpenses));
        });
    }
};

export const removeState = ({ id } = {} /* set valeur default mais rend obligatoire l'argument*/) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    }
);

export const removeStartState = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        // connect to firebase and remove document
        return database.ref(`users/${uid}/expenses`).remove().then(() => {
            // remove data from id
            dispatch(removeState({ id }));
        })
    }
};