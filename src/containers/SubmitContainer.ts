import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { submit } from '../actions';
import { isSubmittable } from '../selectors';
import { Map } from 'immutable';
import Submit from '../components/Submit';

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
