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

        default:
            return state;
    }
}

export default rootReducer;