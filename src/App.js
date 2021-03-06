import React, { useContext } from "react";
import "./App.css";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import { mutliStepContext } from "./StepContext";

export default function App() {
  const { currentStep, finalData } = useContext(mutliStepContext);
 function showStep(step) {
    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ color: "red", textDecoration: "underline" }}>
          Multi Step Form with React
        </h3>
        <Stepper
          style={{ width: "18%" }}
          activeStep={currentStep - 1}
          orientation="horizontal"
        >
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

        {showStep(currentStep)}
      </header>
    </div>
  );
}
