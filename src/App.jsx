import React from 'react';
import './App.css';
import Steps from './components/Steps';
import BestFriends from './components/BestFriends';

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello React World</header>
      <div>
        <Steps />
        <BestFriends />
      </div>
    </div>
  );
}

export default App;
