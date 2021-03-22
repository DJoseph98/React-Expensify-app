import uuid from 'uuid';

export const addState = (
    { //valeur par defaut
        square = '',
        description = '',
        price = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        square,
        description,
        price,
        createdAt
    }
});

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
