import axios from 'axios';
import axiosWithAuth from '../axiosAuth';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const ADDING_START = 'ADDING_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGGING_IN });
  return axios
            .post('http://localhost:5000/api/login', creds)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })})
            .catch(err => {
                console.log(err)
                dispatch({ type: LOGIN_FAILURE, payload: "Couldn't login"})})    
};

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_START })

    axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCHING_FAILURE, payload: "Couldn't fetch" })
        })
}

export const addFriend = (friend) => dispatch => {
    dispatch({ type: ADDING_START })

    axiosWithAuth()
        .post('http://localhost:5000/api/friends', friend)
        .then(res => {
            dispatch({ type: ADD_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: ADD_FAILURE, payload: "Couldn't fetch" })
        })
}