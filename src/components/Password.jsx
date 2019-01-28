import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changePassword} from "../actions";
import {passwordIsValidSelector} from "../selectors";
import '../styles/Password.css';

const debug = require('debug')('alfunkso.net:Password');

function Password({password, passwordIsValid, onChangePassword}) {
  debug("Rendering...");
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
          required
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

Password.propTypes = {
  password: PropTypes.string.isRequired,
  passwordIsValid: PropTypes.bool.isRequired,
  onChangePassword: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  password: state.get("password"),
  passwordIsValid: passwordIsValidSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangePassword: (event) => dispatch(changePassword(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Password
);
