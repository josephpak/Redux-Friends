import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteFriend, prepopulateFriendForm } from '../actions';

const FriendCardWrapper = styled.div`
    height: 200px;
    width: 500px;
    border: 1px solid rgb(59, 89, 152);
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    align-items: center;
    margin: 5px 0;

    button {
        color: white;
        cursor: pointer;
    }

    .delete {
        background-color: firebrick;
    }

    .update {
        background-color: #3B5998;
        border-top-color: #D9DFEA;
        border-left-color: #D9DFEA;
        border-bottom-color: #3B5998;
        border-right-color: #3B5998;
    }
`    

const FriendCardContentWrapper = styled.div`
    padding-right: 30px;
`

const FriendCardButtonWrapper = styled.div`
    display: flex;
    align-items: flex-start;
`

const FriendCard = props => {
  const { friend } = props 

  const handleDelete = (e, id) => {
      e.preventDefault();
      props.deleteFriend(id)
  }

  const handlePrepopulate = (e, friend) => {
    e.preventDefault();
    props.prepopulateFriendForm(friend)
    props.history.push("/friends-form");
  }

  return (
    <FriendCardWrapper>
        <FriendCardContentWrapper>
            <p>{`Name: ${friend.name}`}</p>
            <p>{`Age: ${friend.age}`}</p>
            <p>{`Email: ${friend.email}`}</p>
        </FriendCardContentWrapper>
        <FriendCardButtonWrapper>
            <button 
            onClick={e => handlePrepopulate(e, friend)}
            className="update"
            >Update</button>
            <button
            onClick={e => handleDelete(e, friend.id)}
            className="delete"
            >Delete</button>                
        </FriendCardButtonWrapper>
      
    </FriendCardWrapper>
  )
}

export default connect(
    null,
    { deleteFriend, prepopulateFriendForm }
)(FriendCard)
