import React, { useContext} from 'react';
import { TextField, Button } from '@material-ui/core';
import { mutliStepContext } from "../StepContext";


export default function ThirdStep() {
    const { setStep, userData, setUserData , submitData } = useContext(mutliStepContext);

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
        <div>
            <Button
                variant="contained"
                onClick={() => setStep(2)}
                color="secondary"
            >
                Back
        </Button>
            <span> </span>
            <Button variant="contained" onClick={submitData} color="primary">
               Submit
        </Button>
        </div>
    </>
)
}
