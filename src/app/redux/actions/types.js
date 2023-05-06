import axios from 'axios';

// Define the action types
export const FETCH_GREETING_REQUEST = 'FETCH_GREETING_REQUEST';
export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';
export const FETCH_GREETING_FAILURE = 'FETCH_GREETING_FAILURE';

// Define the action creators
export const fetchGreetingRequest = () => ({
  type: FETCH_GREETING_REQUEST,
});

export const fetchGreetingSuccess = (greeting) => ({
  type: FETCH_GREETING_SUCCESS,
  payload: greeting,
});

export const fetchGreetingFailure = (error) => ({
  type: FETCH_GREETING_FAILURE,
  payload: error,
});

// Define the asynchronous action to fetch the greeting
export const fetchGreeting = () => async (dispatch) => {
  try {
    dispatch(fetchGreetingRequest());

    // Make the API request
    const response = await axios.get('http://localhost:3000/greetings');
    const greeting = response.data;

    dispatch(fetchGreetingSuccess(greeting));
  } catch (error) {
    dispatch(fetchGreetingFailure(error.message));
  }
};
