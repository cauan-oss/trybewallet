import { ADD_CURRENCIES, ADD_DELETE, ADD_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  case ADD_DELETE:
    return {
      ...state,
      expenses: action.payload,
    };
  default: return state;
  }
};

export default wallet;
