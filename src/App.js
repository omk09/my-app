

import React from 'react';
import Click from './components/Click'
import Toggle from './components/Toggle'
import LoginControl from './components/LoginControl'
import Page from './components/Page'
import TempCalculator from './components/TempCalculator'
import FilterableProductTable from './components/FilterableProductTable'
import RouterFirst from './components/RouterFirst'
import Game from './components/TicToc'
import HookHello from './components/HookHello'



function App() {
  return (
    <div className="App">
      {/* <Click /> 
      <TempCalculator /> 
      <FilterableProductTable  /> */}
      <RouterFirst /> 
      <Game /> 
      <HookHello /> 
    </div>
  );
}

export default App;
