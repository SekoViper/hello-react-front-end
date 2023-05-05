import {
  FETCH_GREETING_REQUEST,
  FETCH_GREETING_SUCCESS,
  FETCH_GREETING_FAILURE,
} from '../actions/types';

// Define the initial state
const initialState = {
  greeting: '',
  isLoading: false,
  error: null,
};

// Define the reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_GREETING_SUCCESS:
      return {
        ...state,
        greeting: action.payload,
        isLoading: false,
        error: null,
      };
    case FETCH_GREETING_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
