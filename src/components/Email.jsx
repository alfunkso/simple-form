import React from 'react';
import * as PropTypes from 'prop-types';
import '../styles/Email.css';

const debug = require('debug')('alfunkso.net:EmailContainer');

function Email({ email, emailIsValid, onChangeEmail }) {
  debug('Rendering...');
  return (
    <div className="EmailContainer">
      <label htmlFor="email-input">
        Email
        <input
          id="email-input"
          className="Email"
          type="email"
          onChange={onChangeEmail}
          value={email}
          required
        />
      </label>
      {
        !emailIsValid
        && (
          <div className="EmailHelperText">
            Must enter a valid Email.
          </div>
        )
      }
    </div>
  );
}

Email.propTypes = {
  email: PropTypes.string.isRequired,
  emailIsValid: PropTypes.bool.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
};

export default Email;
