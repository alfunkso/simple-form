import React from 'react';
import * as PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const debug = require('debug')('alfunkso.net:EmailContainer');

function Email({ email, emailIsValid, onChangeEmail }) {
  debug('Rendering...');
  return (
    <TextField
      id="email-input"
      label="Email"
      type="email"
      value={email}
      onChange={onChangeEmail}
      error={!emailIsValid}
      helperText={!emailIsValid && 'Must enter a valid Email.'}
      fullWidth
      required
    />
  );
}

Email.propTypes = {
  email: PropTypes.string.isRequired,
  emailIsValid: PropTypes.bool.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
};

export default Email;
