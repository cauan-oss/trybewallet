export const ADD_EMAIL_INFO = 'ADD_EMAIL_INFO';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const addEmail = (emailInfo) => ({
  type: ADD_EMAIL_INFO,
  payload: emailInfo,
});

export const addCurrencies = (moedas) => ({
  type: ADD_CURRENCIES,
  payload: moedas,
});
