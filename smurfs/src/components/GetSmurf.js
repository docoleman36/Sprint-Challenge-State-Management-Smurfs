import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { getSmurf } from '../actions';

const GetSmurf = ({ getSmurf, smurf, isFetching, isPosting, error }) => {
    useEffect(() => {
        getSmurf();
    }, [getSmurf]);

    if (isFetching) {

        return (
            <div>
                <h3>Fetching Little Blue Smurfs</h3>
            </div>
        )
    } else if (isFetching === false && isPosting === false) {
        return (
            <div>
                <h1>Smurf Village</h1>
                <div className="village">
                    {smurf.map(smurfs => (
                        <div key={smurfs.id}>
                            <h1>{smurfs.name}</h1>
                            <p>{smurfs.age}</p>
                            <p>{smurfs.height}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    } else if (isPosting === true) {
        setTimeout(getSmurf(), 2000)
    }
}

const mapStateToProps = state => {
    return {
        smurf: state.getReducer.smurf,
        isFetching: state.getReducer.isFetching,
        isPosting: state.getReducer.isPosting,
        error: state.getReducer.error
    };
};

export default connect(
    mapStateToProps, { getSmurf })(GetSmurf);