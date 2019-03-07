import axios from 'axios';

export const LOGGING_IN = 'LOGGING_IN';

export const login = creds => dispatch => {
  dispatch({ type: LOGGING_IN });
  return axios.post('http://localhost:5000/api/login', creds).then(res => {
    localStorage.setItem('token', res.data.payload);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.payload });
  });
};