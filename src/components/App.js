import React from 'react';
import Email from './Email';
import Password from './Password';
import Submit from './Submit';
import '../styles/App.css';

const debug = require('debug')('alfunkso.net:App');

function App() {
    debug("Rendering...");
    return (
        <div className="App">
            <div className="Form">
                <Email />
                <Password />
                <Submit />
            </div>
        </div>
    );
}

App.propTypes = {};

export default App;
