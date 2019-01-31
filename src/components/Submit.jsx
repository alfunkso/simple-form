import React from 'react';
import * as PropTypes from 'prop-types';
import Pacman from './Pacman-1s-200px.svg';
import '../styles/Submit.css';

const debug = require('debug')('alfunkso.net:Submit');

function Submit({ submittable, submitted, submit }) {
  debug('Rendering...');
  return (
    <div className="SubmitContainer">
      {
        submitted
          ? (
            <div className="SubmitHelperText">
              <div>
                Thank you for your clicking Login!
                <br />
                {"Here's Pacman."}
              </div>
              <img src={Pacman} alt="Pacman" />
            </div>
          )
          : (
            <button
              type="button"
              className="Submit"
              onClick={submit}
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

Submit.propTypes = {
  submittable: PropTypes.bool.isRequired,
  submitted: PropTypes.bool.isRequired,
  submit: PropTypes.func.isRequired,
};

export default Submit;
