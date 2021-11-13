import "./App.css";
import Header from "./components/Header";
import News from "./components/News";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [progress, setProgress] = useState(10);
  const API_KEY = process.env.REACT_APP_NEWS_APP_API;
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    console.log('Search Query Updated to : ', searchQuery); //It shwos the correct searchQuery.
  }, [searchQuery]);

  const handelSearch = (searchText) => {
    setSearchQuery(new String(searchText));
    console.log('Searching for : ', searchQuery);  //It remains empty
  }

  return (
    <div>
      <Router>
        <Header handelSearch={handelSearch} />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Switch>
          <Route exact path="/">
            <News key="home" setProgress={setProgress} pageSize={15} country="in" apiKey={API_KEY} searchQuery={searchQuery} category="general" />
          </Route>
          <Route exact path="/general">
            <News key="general" setProgress={setProgress} pageSize={15} country="in" apiKey={API_KEY} searchQuery={searchQuery} category="general" />
          </Route>
          <Route exact path="/business">
            <News key="business" setProgress={setProgress} pageSize={15} country="in" apiKey={API_KEY} searchQuery={searchQuery} category="business" />
          </Route>
          <Route exact path="/science">
            <News key="science" setProgress={setProgress} pageSize={15} country="in" apiKey={API_KEY} searchQuery={searchQuery} category="science" />
          </Route>
          <Route exact path="/sports">
            <News key="sports" setProgress={setProgress} pageSize={15} country="in" apiKey={API_KEY} searchQuery={searchQuery} category="sports" />
          </Route>
          <Route exact path="/health">
            <News key="health" setProgress={setProgress} pageSize={15} country="in" apiKey={API_KEY} searchQuery={searchQuery} category="health" />
          </Route>
          <Route exact path="/technology">
            <News key="technology" setProgress={setProgress} pageSize={15} country="in" apiKey={API_KEY} searchQuery={searchQuery} category="technology" />
          </Route>
          <Route exact path="/entertainment">
            <News key="entertainment" setProgress={setProgress} pageSize={15} country="in" apiKey={API_KEY} searchQuery={searchQuery} category="entertainment" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
