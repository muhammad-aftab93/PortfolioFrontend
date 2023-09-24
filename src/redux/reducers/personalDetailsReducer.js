// src/redux/reducers/dataReducer.js

import {
    FETCH_PERSONAL_DETAILS_REQUEST,
    FETCH_PERSONAL_DETAILS_SUCCESS,
    FETCH_PERSONAL_DETAILS_FAILURE,
} from '../actions/personalDetailsActions';

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const personalDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PERSONAL_DETAILS_REQUEST:
            return { ...state, loading: true };
        case FETCH_PERSONAL_DETAILS_SUCCESS:
            return { ...state, data: action.payload, error: null };
        case FETCH_PERSONAL_DETAILS_FAILURE:
            return { ...state, loading: false, data: [], error: action.error };
        default:
            return state;
    }
};

export default personalDetailsReducer;
