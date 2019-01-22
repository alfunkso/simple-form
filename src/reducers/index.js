import * as Types from '../actions/types';
import model from '../model';
import {fromJS} from "immutable";

export default (state = fromJS(model()), action = {}) => {
    const validEmail = (state) =>
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(state.get("email"));
    const validPassword = (state) =>
        state.get("password").length() > 4;

    const updateSubmittable = (state) =>
        state.set("submittable", validEmail(state) && validPassword(state));

    switch (action.type) {
        case Types.CHANGE_EMAIL:
            return state
                .set("email", action.payload.email)
                .update(updateSubmittable)
                ;
        case Types.CHANGE_PASSWORD:
            return state
                .set("password", action.payload.password)
                .update(updateSubmittable)
                ;
        case Types.SUBMIT:
            return state.set("submitted", true);
        default:
            return state;
    }
}