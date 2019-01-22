import * as Types from './types';

export const changeEmail = (email) => ({
    type: Types.CHANGE_EMAIL,
    payload: {email},
});

export const changePassword = (password) => ({
    type: Types.CHANGE_PASSWORD,
    payload: {password},
});

export const submit = () => ({
    type: Types.SUBMIT,
    payload: {},
});
