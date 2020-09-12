import React from 'react';
import logo from './logo.svg';
import Click from './components/Click'
import './App.css';
import Toggle from './components/Toggle'
import LoginControl from './components/LoginControl'
import Page from './components/Page'

function App() {
  return (
    <div className="App">
      <Click /> 
      <Toggle /> 
      <LoginControl /> 
      <Page /> 
    </div>
  );
}

export default App;
