import React from 'react';
import Home from './Pages/Home/Home';
import TopBar from './components/TopBar/TopBar';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';

function App() {
  return (
    <>
      <TopBar />
      {/* <Single />  */}
      <Write />
    </>
  );
}

export default App;
