import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {submit} from "../actions";

const debug = require('debug')('alfunkso.net:Submit');

function Submit({submittable, submit}) {
    debug("Rendering...");
    return (
        <button
            className="Submit"
            onClick={submit}
            disabled={!submittable}
        >
            Submit
        </button>
    );
}

Submit.propTypes = {
    submittable: PropTypes.bool.isRequired,
    submit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    submittable: state.get("submittable"),
});

const mapDispatchToProps = (dispatch) => ({
    submit: () => dispatch(submit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
    Submit
);
