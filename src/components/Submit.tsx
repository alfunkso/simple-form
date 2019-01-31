import * as React from 'react';
import '../styles/Submit.css';

const PACMAN_SVG = require('./Pacman-1s-200px.svg');

const debug = require('debug')('alfunkso.net:Submit');

export interface Props {
  submittable: boolean;
  submitted?: boolean;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Submit({ submittable, submitted, onSubmit }: Props) {
  debug('Rendering...');
  return (
    <div className="SubmitContainer">
      {
        submitted
          ?
          (
            <div className="SubmitHelperText">
              <div>
                Thank you for your clicking Login!
                <br/>
                {"Here's Pacman."}
              </div>
              <img src={PACMAN_SVG} alt="Pacman"/>
            </div>
          )
          :
          (
            <button
              type="button"
              className="Submit"
              onClick={onSubmit}
              disabled={!submittable}
              title={!submittable ? 'Must fill the form with valid info' : 'Submit'}
            >
              Login
            </button>
          )
      }
    </div>
  );
}
