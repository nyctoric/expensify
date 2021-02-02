import {createStore} from 'redux';


// ACTION GENERATORS
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({count}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET',
});

// Reducers

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      };
    default:
      return state;
  }
};

// createStore with reducing function as argument (Reducers calculate the new state given the previous state and an action)
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// DISPATCH ACTIONS - call dispatch method of the store passing in an action
store.dispatch(incrementCount({incrementBy: 22}));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 105}));
