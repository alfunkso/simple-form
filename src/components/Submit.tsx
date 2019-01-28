import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as ReactRedux from 'react-redux';
import { submit } from '../actions';
import { isSubmittable } from '../selectors';
import '../styles/Submit.css';

const PACMAN_SVG = require('./Pacman-1s-200px.svg');

const debug = require('debug')('alfunkso.net:Submit');

export interface Props {
  submittable: boolean;
  submitted: boolean;
  submit: (event: object) => any;
}

function Submit({ submittable, submitted, submit }: Props) {
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

const mapStateToProps = (state: any) => ({
  submittable: isSubmittable(state),
  submitted: state.get('submitted'),
});

const mapDispatchToProps = (dispatch: (action: any) => any) => ({
  submit: () => dispatch(submit()),
});

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(
  Submit,
);
