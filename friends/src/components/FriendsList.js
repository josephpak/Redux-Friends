import React from 'react';
import FriendCard from './FriendCard';
import styled from 'styled-components';

const FriendsListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const FriendsList = props => {
  return (
    <FriendsListWrapper>
        {props.friends.map(friend=> {
            return <FriendCard key={friend.id} friend={friend} />
        })}
    </FriendsListWrapper>
  )
}

export default FriendsList
