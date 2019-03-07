import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/friends-list">Friends</Link>
            </li>
          </ul>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/friends-list" component={FriendsList}/>
        </div>
      </Router>
    );
  }
}

export default App;
