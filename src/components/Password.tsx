import * as React from 'react';
import '../styles/Password.css';

const debug = require('debug')('alfunkso.net:Password');

export interface Props {
  password: string;
  passwordIsValid?: boolean;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Password({ password, passwordIsValid, onChangePassword }: Props) {
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
