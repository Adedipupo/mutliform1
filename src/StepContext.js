import React, { useState } from 'react';


export const mutliStepContext = React.createContext();
const StepContext = () => {
  const [ currentStep, setStep] = useState(1);
  const [ userData, setUserData] = ([]);
  const [ finalData, setFinalData] = ([]);
return(
  <div>
     <mutliStepContext.Provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData}}>

     </mutliStepContext.Provider>
  </div>
)
}

export default StepContext