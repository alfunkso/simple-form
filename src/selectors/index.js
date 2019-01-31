import { createSelector } from 'reselect';
import { EMAIL_REGEXP } from '../constants';

const emailSelector = state => state.get('email');

const passwordSelector = state => state.get('password');

export const emailIsValidSelector = createSelector(
  emailSelector,
  email => EMAIL_REGEXP.test(email),
);

export const passwordIsValidSelector = createSelector(
  passwordSelector,
  password => password.length > 4,
);

export const isSubmittable = createSelector(
  [emailIsValidSelector, passwordIsValidSelector],
  (emailIsValid, passwordIsValid) => emailIsValid && passwordIsValid,
);
