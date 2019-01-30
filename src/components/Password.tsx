import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { changePassword } from '../actions';
import { passwordIsValidSelector } from '../selectors';
import { Map } from 'immutable';
import '../styles/Password.css';

const debug = require('debug')('alfunkso.net:Password');

export interface Props {
  password: string;
  passwordIsValid?: boolean;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Password({ password, passwordIsValid, onChangePassword }: Props) {
  debug('Rendering...');
  return (
    <div className="PasswordContainer">
      <label htmlFor="password-input">
        <div>Password</div>
        <input
          id="password-input"
          className="Password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required={true}
        />
      </label>
      {
        !passwordIsValid &&
        (
          <div className="PasswordHelperText">
            Must enter a Password longer than 4 characters.
          </div>
        )
      }
    </div>
  );
}

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
