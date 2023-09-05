const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const CAKE_ORDER = 'CAKE_ORDER';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDER = 'ICECREAM_ORDER';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

function cakeOrder() {
  return {
    type: CAKE_ORDER,
    payload: 1,
  };
}

function cakeRestocked(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function icecreamOrder(qty = 1) {
  return {
    type: ICECREAM_ORDER,
    payload: qty,
  }
}

function icecreamRestocked(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  }
}

const initialCakeState = {
  numOfCakes: 10,
};

const initialIcecreamState = {
  numOfIcecreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDER:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      }
    default:
      return state;
  }
}

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDER:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      }
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams + action.payload,
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
})

const store = createStore(rootReducer);
console.log('initial state', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('updated state', store.getState());
})

const actions = bindActionCreators(
  { cakeOrder, cakeRestocked, icecreamOrder, icecreamRestocked },
  store.dispatch
  );
actions.cakeOrder();
actions.cakeOrder();
actions.cakeOrder();
actions.cakeRestocked(3);
actions.icecreamOrder();
actions.icecreamOrder();
actions.icecreamRestocked(2);

// store.dispatch(cakeOrder());
// store.dispatch(cakeOrder());
// store.dispatch(cakeOrder());
// store.dispatch(cakeRestoked(3));

unsubscribe();
