import React from 'react';
import EmailContainer from '../containers/EmailContainer';
import PasswordContainer from '../containers/PasswordContainer';
import SubmitContainer from '../containers/SubmitContainer';
import Time from './Time';
import '../styles/App.css';

const debug = require('debug')('alfunkso.net:App');

function App() {
  debug('Rendering...');
  return (
    <div className="App">
      <div className="Form">
        <EmailContainer />
        <PasswordContainer />
        <SubmitContainer />
        <Time />
      </div>
    </div>
  );
}

App.propTypes = {};

export default App;
