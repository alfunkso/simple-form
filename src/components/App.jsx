import React from 'react';
import Paper from '@material-ui/core/Paper';
import EmailContainer from '../containers/EmailContainer';
import PasswordContainer from '../containers/PasswordContainer';
import SubmitContainer from '../containers/SubmitContainer';

const debug = require('debug')('alfunkso.net:App');

function App() {
  debug('Rendering...');
  return (
    <div className="App">
      <Paper>
        <EmailContainer />
        <PasswordContainer />
        <SubmitContainer />
      </Paper>
    </div>
  );
}

App.propTypes = {};

export default App;
