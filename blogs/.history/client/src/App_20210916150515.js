import React, { useContext } from 'react';
import Home from './Pages/Home/Home';
import TopBar from './components/TopBar/TopBar';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';
import Settings from './Pages/Setting/Settings';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Context } from './context/Context';

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <TopBar />
        <Switch >
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/write">
            {user ? <Write /> : <Register />}
          </Route>
          <Route path="/login">
          {user ? <Home /> : <Login />}
          </Route>
          <Route path="/settings">
            {user ? <Settings /> : <Register />}
          </Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
