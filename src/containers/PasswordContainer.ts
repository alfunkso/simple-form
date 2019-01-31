import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { changePassword } from '../actions';
import { passwordIsValidSelector } from '../selectors';
import { Map } from 'immutable';
import Password from '../components/Password';
import * as React from 'react';

const mapStateToProps = (state: Map<string, any>) => ({
  password: state.get('password'),
  passwordIsValid: passwordIsValidSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(changePassword(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Password,
);
