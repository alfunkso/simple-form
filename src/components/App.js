import React from 'react';
import Email from './Email';
import Password from './Password';
import Submit from './Submit';

const debug = require('debug')('alfunkso.net:App');

function App() {
    debug("Rendering...");
    return (
        <div className="App">
            <div className="EmailContainer">
                <Email />
            </div>
            <div className="PasswordContainer">
                <Password />
            </div>
            <div className="SubmitContainer">
                <Submit />
            </div>
        </div>
    );
}

App.propTypes = {};

export default App;
