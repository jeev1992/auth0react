import './App.css';
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import User from './components/User';

function App() {
  const { isAuthenticated } = useAuth0()

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div>
          <p>Login</p>
          <Login />
        </div>
      ) : (
        <div>
          <Logout />
          <User />
        </div>)}

    </div>
  );
}

export default App;
