import React from 'react';
import * as PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const debug = require('debug')('alfunkso.net:Password');

function Password({ password, passwordIsValid, onChangePassword }) {
  debug('Rendering...');
  return (
    <TextField
      id="password-input"
      label="Password"
      type="password"
      value={password}
      onChange={onChangePassword}
      error={!passwordIsValid}
      helperText={!passwordIsValid && 'Must enter a Password longer than 4 characters.'}
      fullWidth
      required
    />
  );
}

Password.propTypes = {
  password: PropTypes.string.isRequired,
  passwordIsValid: PropTypes.bool.isRequired,
  onChangePassword: PropTypes.func.isRequired,
};

export default Password;
