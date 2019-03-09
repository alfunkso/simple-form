import React from 'react';
import * as PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Pacman from './Pacman-1s-200px.svg';

const debug = require('debug')('alfunkso.net:Submit');

function Submit({ submittable, submitted, submit }) {
  debug('Rendering...');
  return (
    <div className="SubmitContainer">
      {
        submitted
          ? (
            <div className="SubmitHelperText">
              <Typography variant="body1">Thank you for your clicking Login!</Typography>
              <Typography variant="body1">Here&apos;s Pacman.</Typography>
              <img src={Pacman} alt="Pacman" />
            </div>
          )
          : (
            <Button
              type="button"
              onClick={submit}
              disabled={!submittable}
              title={!submittable ? 'Must fill the form with valid info' : 'Submit'}
              color="primary"
              variant="contained"
              fullWidth
            >
              Login
            </Button>
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
