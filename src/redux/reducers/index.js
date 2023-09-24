import { combineReducers } from 'redux';
import personalDetailsReducer from './personalDetailsReducer';

const rootReducer = combineReducers({
    personalDetails: personalDetailsReducer,
    // Add other reducers here if needed
});

export default rootReducer;
