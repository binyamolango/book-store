const store = require('./store');
const cakeActions = require('./books/booksSlice').cakeActions;

console.log('initial state ', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('updated state ', store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

unsubscribe();
