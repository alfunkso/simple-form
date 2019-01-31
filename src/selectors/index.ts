import { createSelector } from 'reselect';
import { EMAIL_REGEXP } from '../constants';
import { Map } from 'immutable';

const emailSelector = (state: Map<string, any>) => state.get('email');

const passwordSelector = (state: Map<string, any>) => state.get('password');

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
