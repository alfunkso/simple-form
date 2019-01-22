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
            <Email />
            <Password />
            <Submit />
        </div>
    );
}

App.propTypes = {};

export default App;
