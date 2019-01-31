import { fromJS } from 'immutable';
import * as constants from '../constants';
import model from '../model';

export default (state = fromJS(model()), action = {}) => {
  switch (action.type) {
    case constants.CHANGE_EMAIL:
      return state.set('email', action.payload.email);
    case constants.CHANGE_PASSWORD:
      return state.set('password', action.payload.password);
    case constants.SUBMIT:
      return state.set('submitted', true);
    default:
      return state;
  }
};
