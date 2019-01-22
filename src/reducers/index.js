import * as Types from '../actions/types';
import model from '../model';
import {fromJS} from "immutable";

export default (state = fromJS(model()), action = {}) => {
    switch (action.type) {
        case Types.CHANGE_EMAIL:
            return state.set("email", action.payload.email);
        case Types.CHANGE_PASSWORD:
            return state.set("password", action.payload.password);
        case Types.SUBMIT:
            return state.set("submitted", true);
        default:
            return state;
    }
}
