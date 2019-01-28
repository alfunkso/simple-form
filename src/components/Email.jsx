import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeEmail} from "../actions";
import {emailIsValidSelector} from "../selectors";
import '../styles/Email.css';

const debug = require('debug')('alfunkso.net:Email');

function Email({email, emailIsValid, onChangeEmail}) {
  debug("Rendering...");
  return (
    <div className="EmailContainer">
      <label htmlFor="email-input">
        <div>Email</div>
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
        !emailIsValid &&
        (
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

const mapStateToProps = (state) => ({
  email: state.get("email"),
  emailIsValid: emailIsValidSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeEmail: (event) => dispatch(changeEmail(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Email
);
