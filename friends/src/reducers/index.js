import {
    LOGGING_IN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE,

    ADDING_START,
    ADD_SUCCESS,
    ADD_FAILURE,

    DELETING_START,
    DELETE_SUCCESS,
    DELETE_FAILURE,

    PREPOPULATE_FRIEND_FORM,

} from "../actions"

const initialState = {
    friends: [],
    activeFriend: '',
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
            
        case ADDING_START:
            return {
                ...state,
                fetchingFriends: true,
                error: null
            }    
        case ADD_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                friends: action.payload,
                error: null
            }
        case ADD_FAILURE:    
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            }    
            
        case DELETING_START:
            return {
                ...state,
                fetchingFriends: false,
                deletingFriends: true,
                error: null
            }    
        case DELETE_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                deletingFriends: false,
                friends: action.payload,
                error: null
            }
        case DELETE_FAILURE:    
            return {
                ...state,
                fetchingFriends: false,
                deletingFriends: false,
                error: action.payload
            }
            
        case PREPOPULATE_FRIEND_FORM:
            return {
                ...state,
                activeFriend: action.payload,
                error: false
            }    

        default:
            return state;
    }
}

export default rootReducer;