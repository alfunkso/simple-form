import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {submit} from "../actions";
import {isSubmittable} from "../selectors";
import '../styles/Submit.css'

const debug = require('debug')('alfunkso.net:Submit');

function Submit({submittable, submitted, submit}) {
    debug("Rendering...");
    return (
        <div className="SubmitContainer">
            {
                submitted
                    ?
                    <div className="SubmitHelperText">
                        Thank you for your clicking Login!
                    </div>
                    :
                    <button
                        className="Submit"
                        onClick={submit}
                        disabled={!submittable}
                        title={!submittable ? "Must fill the form with valid info" : "Submit"}
                    >
                        Login
                    </button>
            }
        </div>
    );
}

Submit.propTypes = {
    submittable: PropTypes.bool.isRequired,
    submitted: PropTypes.bool.isRequired,
    submit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    submittable: isSubmittable(state),
    submitted: state.get("submitted"),
});

const mapDispatchToProps = (dispatch) => ({
    submit: () => dispatch(submit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
    Submit
);
