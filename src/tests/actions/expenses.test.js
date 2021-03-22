import { addState, removeState, editState } from '../../actions/expenses';

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
