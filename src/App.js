import React from 'react';
import './App.css';
import FirstStep from './components/FirstStep';
import SeconStep from './components/SecondStep';
import thirdStep from './components/ThirdStep';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{color:'red',textDecoration:'underline'}}>Multi Step Form with React</h3>
         <FirstStep />
         <SecondStep />
         <ThirdStep />
      </header>
    </div>
  );
}

export default App;
