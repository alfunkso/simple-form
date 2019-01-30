import { fromJS, Map } from 'immutable';
import { Action } from '../actions';
import * as constants from '../constants';
import model from '../model';

export default (state = fromJS(model()) as Map<string, any>, action: Action) => {
  switch (action.type) {
    case constants.CHANGE_EMAIL_ACTION_TYPE:
      return state.set('email', action.payload.email);
    case constants.CHANGE_PASSWORD_ACTION_TYPE:
      return state.set('password', action.payload.password);
    case constants.SUBMIT_ACTION_TYPE:
      return state.set('submitted', true);
    default:
      return state;
  }
};
