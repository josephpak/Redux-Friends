import {
    LOGGING_IN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE,
} from "../actions"

const initialState = {
    friends: [],
    loggingIn: false,
    fetchingFriends: false,
    updatingFriends: false,
    savingFriends: false,
    deletingFriend: false,
    error: null
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGGING_IN:
            return {
                ...state,
                loggingIn: true,
                error: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                error: null
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                error: action.payload
            }  
            
        case FETCHING_START:
            return {
                ...state,
                fetchingFriends: true,
                error: null
            }
        case FETCHING_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                friends: action.payload,
                error: null
            }
        case FETCHING_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            }    

        default:
            return state;
    }
}

export default rootReducer;