import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from "react-redux";

import FriendsListView from './views/FriendsListView';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import './App.css';

class App extends Component {

  clearLocalStorage = e => {
      e.preventDefault();
      localStorage.clear();
      window.location.reload();
  };

  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            {this.props.loggingIn && <Link to="/login">Login</Link>}
            <Link to="/friends-list">Friends</Link>
            <a onClick={this.clearLocalStorage}>Logout</a>
          </nav>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/friends-list" component={FriendsListView}/>
        </div>
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
