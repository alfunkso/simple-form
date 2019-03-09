import * as constants from '../constants';

export const changeEmail = email => ({
  type: constants.CHANGE_EMAIL,
  payload: { email },
});

export const changePassword = password => ({
  type: constants.CHANGE_PASSWORD,
  payload: { password },
});

export const submit = () => ({
  type: constants.SUBMIT,
  payload: {},
});
