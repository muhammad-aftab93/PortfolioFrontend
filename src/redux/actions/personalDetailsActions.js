import axios from 'axios';
import {PersonalDetailsEndpoint} from "../../constants/endpoints";

export const FETCH_PERSONAL_DETAILS_REQUEST = 'FETCH_PERSONAL_DETAILS_REQUEST';
export const FETCH_PERSONAL_DETAILS_SUCCESS = 'FETCH_PERSONAL_DETAILS_SUCCESS';
export const FETCH_PERSONAL_DETAILS_FAILURE = 'FETCH_PERSONAL_DETAILS_FAILURE';

export const fetchPersonalDetails = () => async (dispatch) => {
  dispatch({ type: FETCH_PERSONAL_DETAILS_REQUEST });

  try {
    const response = await axios.get(PersonalDetailsEndpoint);
    dispatch({ type: FETCH_PERSONAL_DETAILS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PERSONAL_DETAILS_FAILURE, error });
  }
};