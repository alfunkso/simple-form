import {createSelector} from "reselect";

const emailRegexp =
    // eslint-disable-next-line
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailSelector = state => state.get("email");
const passwordSelector = state => state.get("password");

export const emailIsValidSelector = createSelector(
    emailSelector,
    email => emailRegexp.test(email),
);

export const passwordIsValidSelector = createSelector(
    passwordSelector,
    password => password.length > 4,
);

export const isSubmittable = createSelector(
    [emailIsValidSelector, passwordIsValidSelector],
    (emailIsValid, passwordIsValid) => emailIsValid && passwordIsValid,
);
