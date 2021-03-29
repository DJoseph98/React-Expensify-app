import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store'; // mock for store redux
import { addStartState, addState, removeState, editState, setStates, setStartStates, removeStartState } from '../../actions/expenses';
import database from '../../firebase/firebase';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expenseData = {};
    expenses.forEach(({ id, description, note, price, createdAt, square }) => {
        expenseData[id] = { description, note, price, createdAt, square };
    })
    database.ref('expenses').set(expenseData).then(() => done());
});

test('remove state', () => {
    const result = removeState({ id: '123' });
    expect(result).toEqual(
        {
            type: 'REMOVE_EXPENSE',
            id: '123'
        })
});

test('edit state', () => {
    const result = editState('123', { price: '123' });
    expect(result).toEqual(
        {
            type: 'EDIT_EXPENSE',
            id: '123',
            updates: { "price": '123' }
        })
});

test('add state to database', (done) => { //done permet de stopper la fonction de test ou on veut
    const store = createMockStore({});
    const expenseData = {
        square: 0,
        description: 'mon appart',
        note: '1 mètre carré',
        price: 1111000,
        createdAt: 1000
    };

    store.dispatch(addStartState(expenseData)).then(() => {
        const actions = store.getActions(); //récupère les actions de expense
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        //promise chaining
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done(); // ici permet de stoper le test jusqu'au retour de la promise
    });
});

test('add state to database with default value', (done) => { //done permet de stopper la fonction de test ou on veut
    const store = createMockStore({});
    const expenseDefault = {
        square: 0,
        description: '',
        note: '',
        price: 0,
        createdAt: 0
    };

    store.dispatch(addStartState(expenseDefault)).then(() => {
        const actions = store.getActions(); //récupère les actions de expense
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });

        //promise chaining
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done(); // ici permet de stoper le test jusqu'au retour de la promise
    });
});

/* test('add state to database with default value', () => {

}); */
test('add state', () => {
    const expenseData = {
        square: '1 mètre carré',
        description: 'mon appart',
        price: 1111000,
        createdAt: 1000
    };
    const result = addState(expenseData);

    expect(result).toEqual({

        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String) // sachant que l'id est générer automatiquement, aucun moyen de le récupérer, ducoup on check si c'est un string qui est généré
        }
    });
});

test('add state default value', () => {
    const result = addState();
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String), // sachant que l'id est générer automatiquement, aucun moyen de le récupérer, ducoup on check si c'est un string qui est généré,
            square: '',
            description: '',
            price: 0,
            createdAt: 0
        }
    })
});

test('set states from value', () => {
    const results = setStates(expenses);
    expect(results).toEqual({
        type: 'SET_STATES',
        expenses
    });
});

test('should fetch data from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(setStartStates()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_STATES',
            expenses
        });
        done();
    });
});

test('should remove data from firebase by id', (done) => {
    const store = createMockStore({});
    const id = expenses[0].id;
    store.dispatch(removeStartState({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value').then((snapshot) => { //check id expenses removed
            expect(snapshot.val()).toBeFalsy;
            done();
        })
    });
});