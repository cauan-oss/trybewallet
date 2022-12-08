export const ADD_EMAIL_INFO = 'ADD_EMAIL_INFO';

export const addEmail = (emailInfo) => ({
  type: ADD_EMAIL_INFO,
  payload: emailInfo,
});
