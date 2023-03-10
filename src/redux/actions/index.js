import chamaApi from '../../components/servicesApi';

export const ADD_EMAIL_INFO = 'ADD_EMAIL_INFO';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const ADD_DELETE = 'ADD_DELETE';

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

export const fetchExpenses = () => async () => {
  const data = await chamaApi();
  delete data.USDT;
  return data;
};

export const actionDelete = (id, expense) => ({
  type: ADD_DELETE,
  payload: expense.filter((x) => x.id !== id),
});
