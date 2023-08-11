import React, { useState } from 'react';
import LandingPage from './LandingPage';
import MainPage from './MainPage';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  return (
    <div className="App">
      {!started && <LandingPage onStart={handleStart} />}
      {started && <MainPage />}
    </div>
  );
}

export default App;