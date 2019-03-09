import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from "react-redux";
import styled from 'styled-components';

import FriendsListView from './views/FriendsListView';
import NewFriendForm from './components/NewFriendForm';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import './App.css';

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 50px;
  align-items: center;
  flex-direction: column;
`

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  padding: 20px 5%;
  width: 100%;

  a {
    margin: 0 10px;
    text-decoration: none;
    color: #538ADC;
    cursor: pointer;
  }
`

class App extends Component {

  clearLocalStorage = e => {
      e.preventDefault();
      localStorage.clear();
      window.location.reload();
  };

  render() {
    return (
      <Router>
        <AppWrapper>
          <NavWrapper>
            {this.props.loggingIn && <Link to="/login">[ login ]</Link>}
            <Link to="/friends-list">[ friends ]</Link>
            <Link to="/friends-form">[ add new friend ]</Link>
            <a className="logout" onClick={this.clearLocalStorage}>[ logout ]</a>
          </NavWrapper>
          <div>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/friends-list" component={FriendsListView}/>
            <PrivateRoute path="/friends-form" component={NewFriendForm}/>
          </div>
        </AppWrapper>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggingIn: state.loggingIn
  }
};

export default connect(
  mapStateToProps
)(App);
