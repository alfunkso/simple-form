import * as constants from '../constants';

export interface ChangeEmailAction {
  type: constants.CHANGE_EMAIL_ACTION_TYPE;
  payload: { email: string; };
}

export const changeEmail = (email: string): ChangeEmailAction => ({
  type: constants.CHANGE_EMAIL_ACTION_TYPE,
  payload: { email },
});

export interface ChangePasswordAction {
  type: constants.CHANGE_PASSWORD_ACTION_TYPE;
  payload: { password: string; };
}

export const changePassword = (password: string): ChangePasswordAction => ({
  type: constants.CHANGE_PASSWORD_ACTION_TYPE,
  payload: { password },
});

export interface SubmitAction {
  type: constants.SUBMIT_ACTION_TYPE;
  payload: {};
}

export const submit = (): SubmitAction => ({
  type: constants.SUBMIT_ACTION_TYPE,
  payload: {},
});

export type Action = ChangeEmailAction | ChangePasswordAction | SubmitAction;
