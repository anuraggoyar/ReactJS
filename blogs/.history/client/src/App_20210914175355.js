import React from 'react';
import Home from './Pages/Home/Home';
import TopBar from './components/TopBar/TopBar';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';
import Settings from './Pages/Setting/Settings';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <TopBar />
        <Switch >
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/write">
            <Write />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
        
    </Router>
  );
}

export default App;
