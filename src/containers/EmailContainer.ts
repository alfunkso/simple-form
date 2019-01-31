import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { changeEmail } from '../actions';
import { emailIsValidSelector } from '../selectors';
import { Map } from 'immutable';
import Email from '../components/Email';
import * as React from 'react';

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
