import { combineReducers } from 'redux'

import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE,
    POSTING_SMURF_START,
    POSTING_SMURF_SUCCESS,
    POSTING_SMURF_FAILURE
} from "../actions";

const initialState = {
    smurf: [],
    isFetching: false,
    isPosting: false,
    error: ""
};

export const getReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SMURF_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCHING_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurf: action.payload
            };
        case FETCHING_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        default:
            return state;
    }
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POSTING_SMURF_START:
            return {
                ...state,
                isPosting: true
            };
        case POSTING_SMURF_SUCCESS:
            return {
                ...state,
                smurf: action.payload,
                isPosting: false,
                error: ""
            }
        case POSTING_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload,
                isPosting: false
            }
        default:
            return state;
    }
}

export default combineReducers({
    getReducer,
    postReducer
})