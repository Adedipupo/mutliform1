import React, { useContext} from 'react';
import { TextField, Button } from '@material-ui/core';
import { mutliStepContext } from "../StepContext";


export default function ThirdStep() {
    const { setStep, userData, setUserData } = useContext(mutliStepContext);

return(
    <>
        <TextField
            label="City"
            variant="outlined"
            margin="normal"
            color="secondary"
        />
        <TextField
            label="Landmark"
            variant="outlined"
            margin="normal"
            color="secondary"
        />
        <TextField
            label="Postal Code"
            variant="outlined"
            margin="normal"
            color="secondary"
        />
        <Button variant="contained" color="primary">Back</Button>
        <Button variant="contained" onClick={() => setStep()}  color="primary">Submit</Button>
    </>
)
}
