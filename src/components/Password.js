import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changePassword} from "../actions";
import '../styles/Password.css';

const debug = require('debug')('alfunkso.net:Password');

function Password({password, onChangePassword}) {
    debug("Rendering...");
    return (
        <div className="PasswordContainer">
            <input
                className="Password"
                type="password"
                value={password}
                onChange={onChangePassword}
            />
        </div>
    );
}

Password.propTypes = {
    password: PropTypes.string.isRequired,
    onChangePassword: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    password: state.get("password"),
});

const mapDispatchToProps = (dispatch) => ({
    onChangePassword: (event) => dispatch(changePassword(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
    Password
);
