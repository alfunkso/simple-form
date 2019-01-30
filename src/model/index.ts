import * as types from '../types';

export default (): types.StoreState => ({
  email: '',
  password: '',
  submitted: false,
});
