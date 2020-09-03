import React from 'react';
import './App.css';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import { Stepper , StepLabel , Step} from '@material-ui/core';

function App() {
  function showStep(step){
    switch (step) {
      case 1:
        return <FirstStep />
      case 2: 
        return <SecondStep />
      case 3:
        return <ThirdStep />
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{color:'red',textDecoration:'underline'}}>Multi Step Form with React</h3>
        <Stepper style={{width:'18%'}} activeStep="1" orientation="horizontal">
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>

         { showStep(1)}
      </header>
    </div>
  );
}

export default App;
