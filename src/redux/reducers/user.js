import { ADD_EMAIL_INFO } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EMAIL_INFO:
    return {
      ...state,
      email: action.payload,
    };
  default: return state;
  }
};

export default user;
