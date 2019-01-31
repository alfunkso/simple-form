import { connect } from 'react-redux';
import { changeEmail } from '../actions';
import { emailIsValidSelector } from '../selectors';
import Email from '../components/Email';

const mapStateToProps = state => ({
  email: state.get('email'),
  emailIsValid: emailIsValidSelector(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeEmail: event => dispatch(changeEmail(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Email,
);
