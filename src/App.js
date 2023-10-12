import React from 'react'
import MainScreen from './components/MainScreen';
import Navbarr from './components/Navbarr';
import Branches from './components/Branches';

function App() {
  return (
    <div className="App">
    <Navbarr/>
    <Branches/>
    <MainScreen />
    </div>
  );
}

export default App;
