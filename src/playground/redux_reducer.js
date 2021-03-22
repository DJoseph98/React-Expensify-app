////////////////////// NEVER CHANGER LES DONNEES DU STORE DIRECTEMENT

store.subscribe(() => {
    const state = store.getState();
    const stateFiltered = getFilteredExpense(state.expenses, state.filter);
    console.log(stateFiltered);
});


const action1 = store.dispatch(addState({ description: 'Rent', price: 10000, createdAt: -11000 }));
const action2 = store.dispatch(addState({ description: 'Sale', price: 100000, createdAt: -1000 }));

//store.dispatch(editState(action1.expense.id, { price: 10 }));

//store.dispatch(editState(action1.expense.id, { price: 10 }));

//store.dispatch(setTextFilter('s'));
//store.dispatch(setTextFilter());

//store.dispatch(sortByAmount());
///store.dispatch(sortByDate());

//store.dispatch(setStartDate(125));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(2021));

//store.dispatch(removeState({ id: action1.expense.id }));

/* const Mec = {
    name: 'Mec',
    age: 28
};

console.log({
    //...Mec si placé avant new valeur, prend la new valeur
    city: 'Monaco',
    age: 24,
    ...Mec, // si placé après dessous d'une new valeur, il prend la valeur de mec
});
 */