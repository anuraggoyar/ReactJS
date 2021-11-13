import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Alert from './components/Alert';
import LogIn from './components/Login';
import SignUp from './components/Signup';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=> {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <NoteState>
      <Router>
        <Header showAlert={showAlert}/>
        <Alert alert={alert}/>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home showAlert={showAlert} />
            </Route>
            <Route exact path="/about">
              <About />
              </Route>
            <Route exact path="/login">
              <LogIn showAlert={showAlert} />
            </Route>
            <Route exact path="/signup">
              <SignUp showAlert={showAlert}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
