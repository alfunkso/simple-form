import React from 'react';
import * as PropTypes from 'prop-types';
import '../styles/Password.css';

const debug = require('debug')('alfunkso.net:Password');

function Password({ password, passwordIsValid, onChangePassword }) {
  debug('Rendering...');
  return (
    <div className="PasswordContainer">
      <label htmlFor="password-input">
        Password
        <input
          id="password-input"
          className="Password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </label>
      {
        !passwordIsValid
        && (
          <div className="PasswordHelperText">
            Must enter a Password longer than 4 characters.
          </div>
        )
      }
    </div>
  );
}

Password.propTypes = {
  password: PropTypes.string.isRequired,
  passwordIsValid: PropTypes.bool.isRequired,
  onChangePassword: PropTypes.func.isRequired,
};

export default Password;
