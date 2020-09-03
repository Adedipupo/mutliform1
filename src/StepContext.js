import React, { useState } from "react";
import App from './App';

export const mutliStepContext = React.createContext();
const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = [];
  const [finalData, setFinalData] = [];
  return (
    <div>
      <mutliStepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
        }}
      >
        <App />
      </mutliStepContext.Provider>
    </div>
  );
};

export default StepContext;
