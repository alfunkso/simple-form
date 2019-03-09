import { connect } from 'react-redux';
import { submit } from '../actions';
import { isSubmittable } from '../selectors';
import Submit from '../components/Submit';

const mapStateToProps = state => ({
  submittable: isSubmittable(state),
  submitted: state.get('submitted'),
});

const mapDispatchToProps = dispatch => ({
  submit: () => dispatch(submit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Submit,
);
