import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeEmail} from "../actions";

const debug = require('debug')('alfunkso.net:Email');

function Email({email, onChangeEmail}) {
    debug("Rendering...");
    return (
        <input
            className="Email"
            type="email"
            onChange={onChangeEmail}
            value={email}
        />
    );
}

Email.propTypes = {
    email: PropTypes.string.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    email: state.get("email"),
});

const mapDispatchToProps = (dispatch) => ({
    onChangeEmail: (event) => dispatch(changeEmail(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
    Email
);
