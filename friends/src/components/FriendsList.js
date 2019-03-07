import React from 'react';
import FriendCard from './FriendCard';

const FriendsList = props => {
  return (
    <div>
        {props.friends.map(friend=> {
            return <FriendCard key={friend.id} friend={friend} />
        })}
      Friends List
    </div>
  )
}

export default FriendsList
