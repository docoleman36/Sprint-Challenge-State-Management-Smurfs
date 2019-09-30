import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { getSmurf } from '../actions';

const GetSmurf = ({ getSmurf, smurf, isFetching, error }) => {
    useEffect(() => {
        getSmurf();
    }, [getSmurf]);

    if (isFetching) {
        return <h3>Fetching Little Blue Smurfs</h3>
    }

    return (
        <div>
            <h1>Smurf Village</h1>
            <div>
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
}

const mapStateToProps = state => {
    return {
        smurf: state.getReducer.smurf,
        isFetching: state.getReducer.isFetching,
        error: state.getReducer.error
    };
};

export default connect(
    mapStateToProps, { getSmurf })(GetSmurf);