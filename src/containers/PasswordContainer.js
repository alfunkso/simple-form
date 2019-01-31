import { connect } from 'react-redux';
import { changePassword } from '../actions';
import { passwordIsValidSelector } from '../selectors';
import Password from '../components/Password';

const mapStateToProps = state => ({
  password: state.get('password'),
  passwordIsValid: passwordIsValidSelector(state),
});

const mapDispatchToProps = dispatch => ({
  onChangePassword: event => dispatch(changePassword(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Password,
);
