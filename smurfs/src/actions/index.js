import axios from 'axios';

export const FETCHING_SMURF_START = "FETCHING_SMURF_START"
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS"
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE"

export const POSTING_SMURF_START = "POSTING_SMURF_START"
export const POSTING_SMURF_SUCCESS = "POSTING_SMURF_SUCCESS"
export const POSTING_SMURF_FAILURE = "POSTING_SMURF_FAILURE"

export const getSmurf = () => dispatch => {
  dispatch({ type: POSTING_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res.data)
      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_SMURF_FAILURE, payload: err.data });
    });
}

export const postSmurf = (smurf) => dispatch => {
  dispatch({ type: POSTING_SMURF_START });
  axios
    .post(`http://localhost:3333/smurfs`, {
      name: smurf.name,
      height: smurf.height,
      age: smurf.age
    })
    .then(res => {
      console.log("post res", res)
      dispatch({ type: POSTING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: POSTING_SMURF_FAILURE, payload: err });
    });
}
