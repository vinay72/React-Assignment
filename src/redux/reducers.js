// src/redux/reducers.js
import { FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE } from './actions';

const initialState = {
  jobs: [], // Initialize jobs as an empty array
  loading: false,
  error: null
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: action.payload, // Set jobs to the array of fetched jobs
        error: null
      };
    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        jobs: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default jobsReducer;
