import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { submit } from '../actions';
import { isSubmittable } from '../selectors';
import '../styles/Submit.css';
import { Map } from 'immutable';

const PACMAN_SVG = require('./Pacman-1s-200px.svg');

const debug = require('debug')('alfunkso.net:Submit');

export interface Props {
  submittable: boolean;
  submitted?: boolean;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function Submit({ submittable, submitted, onSubmit }: Props) {
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

const mapStateToProps = (state: Map<string, any>) => ({
  submittable: isSubmittable(state),
  submitted: state.get('submitted'),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit: () => dispatch(submit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Submit,
);
