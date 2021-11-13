import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextProvider from './context/Context';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider></ContextProvider>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
