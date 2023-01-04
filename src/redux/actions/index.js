export const ADD_EMAIL_INFO = 'ADD_EMAIL_INFO';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const addEmail = (emailInfo) => ({
  type: ADD_EMAIL_INFO,
  payload: emailInfo,
});

export const addCurrencies = (moedas) => ({
  type: ADD_CURRENCIES,
  payload: moedas,
});

export const addExpenses = (expense) => ({
  type: ADD_EXPENSES,
  payload: expense,
});
