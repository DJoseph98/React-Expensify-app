import { createStore } from 'redux';

const increment = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decrement = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const reset = () => ({
    type: 'RESET'
});

const setCount = ({randomInt = 1000}) => ({ //force user to set a count
    type: 'TEST',
    randomInt: randomInt
});

// Reducer-----------------------------------------------------
// NEVER CHANGE STATE OR ACTION
const store = createStore((state = { counter: 0 }, action) => { 
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + action.incrementBy
            }
        case 'DECREMENT':
            return {
                counter: state.counter - action.decrementBy
            }
        case 'RESET':
            return {
                counter: 0
            }
        case 'TEST':
            return {
                counter: action.randomInt
            }
    }
});
//-------------------------------------------------------------

store.subscribe(() => { // est appelé à chaque changement de state
    console.log(store.getState());
});

store.dispatch(increment());

store.dispatch(increment({incrementBy: 5}));

store.dispatch(decrement());

store.dispatch(reset());

store.dispatch(setCount({randomInt:2}));
