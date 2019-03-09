import React from 'react';
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import FriendsList from "../components/FriendsList"

import { getFriends } from "../actions";


class FriendsListView extends React.Component {

    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        if (this.props.fetchingFriends) {
            return <Loader type="Ball-Triangle" color="blue" height="90" width="60" />
        }
        return (
            <div>
                <FriendsList {...this.props} friends={this.props.friends} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        error: state.error,
        fetchingFriends: state.fetchingFriends
    }
}    

export default connect(
    mapStateToProps,
    { getFriends }
)(FriendsListView)