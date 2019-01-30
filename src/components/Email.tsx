import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { changeEmail } from '../actions';
import { emailIsValidSelector } from '../selectors';
import { Map } from 'immutable';
import '../styles/Email.css';

const debug = require('debug')('alfunkso.net:Email');

export interface Props {
  email: string;
  emailIsValid?: boolean;
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Email({ email, emailIsValid, onChangeEmail }: Props) {
  debug('Rendering...');
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
          required={true}
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

const mapStateToProps = (state: Map<string, any>) => ({
  email: state.get('email'),
  emailIsValid: emailIsValidSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(changeEmail(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Email,
);
