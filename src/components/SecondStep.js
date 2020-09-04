import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { mutliStepContext } from "../StepContext";


export default function SecondStep () {
    const { setStep, userData, setUserData } = useContext(mutliStepContext);

return(
  <>
        <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            color="secondary"
        />
        <TextField
            label="Country"
            variant="outlined"
            margin="normal"
            color="secondary"
        />
        <TextField
            label="District"
            variant="outlined"
            margin="normal"
            color="secondary"
        />
        <Button variant="contained" onClick={() => setStep(1)} color="primary">Back</Button>
        <Button variant="contained" onClick={() => setStep(3)} color="primary">Next</Button>
    </>
)
}
