import React, { useContext} from 'react';
import { TextField, Button } from '@material-ui/core';
import { mutliStepContext } from "../StepContext";


export default function ThirdStep() {
    const { setStep, userData, setUserData , submitData } = useContext(mutliStepContext);

return(
    <>
        <TextField
            label="City"
            value={userData['city']}
            variant="outlined"
            margin="normal"
            color="secondary"
        />
        <TextField
            label="Landmark"
            value={userData['landmark']}
            variant="outlined"
            margin="normal"
            color="secondary"
        />
        <TextField
            label="Postal Code"
            value={userData['postalcode']}
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
