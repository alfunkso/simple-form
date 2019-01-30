export const CHANGE_EMAIL_ACTION_TYPE = 'CHANGE_EMAIL';
export type CHANGE_EMAIL_ACTION_TYPE = typeof CHANGE_EMAIL_ACTION_TYPE;

export const CHANGE_PASSWORD_ACTION_TYPE = 'CHANGE_PASSWORD';
export type CHANGE_PASSWORD_ACTION_TYPE = typeof CHANGE_PASSWORD_ACTION_TYPE;

export const SUBMIT_ACTION_TYPE = 'SUBMIT';
export type SUBMIT_ACTION_TYPE = typeof SUBMIT_ACTION_TYPE;

// tslint:disable-next-line
export const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export type EMAIL_REGEXP = typeof EMAIL_REGEXP;
