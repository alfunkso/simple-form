import * as React from 'react';
import '../styles/Email.css';

const debug = require('debug')('alfunkso.net:Email');

export interface Props {
  email: string;
  emailIsValid?: boolean;
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Email({ email, emailIsValid, onChangeEmail }: Props) {
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
