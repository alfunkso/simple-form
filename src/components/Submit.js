import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {submit} from "../actions";
import {isSubmittable} from "../selectors";
import '../styles/Submit.css'

const debug = require('debug')('alfunkso.net:Submit');

function Submit({submittable, submit}) {
    debug("Rendering...");
    return (
        <div className="SubmitContainer">
            <button
                className="Submit"
                onClick={submit}
                disabled={!submittable}
            >
                Submit
            </button>
        </div>
    );
}

Submit.propTypes = {
    submittable: PropTypes.bool.isRequired,
    submit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    submittable: isSubmittable(state),
});

const mapDispatchToProps = (dispatch) => ({
    submit: () => dispatch(submit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
    Submit
);