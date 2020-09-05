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
            onChange={(e) => setUserData({ ...userData, "city": e.target.value })}
            variant="outlined"
            margin="normal"
            color="secondary"
        />
        <TextField
            label="Landmark"
            value={userData['landmark']}
            onChange={(e) => setUserData({ ...userData, "landmark": e.target.value })}
            variant="outlined"
            margin="normal"
            color="secondary"
        />
        <TextField
            label="Postal Code"
            value={userData['postalcode']}
            onChange={(e) => setUserData({ ...userData, "postalcode": e.target.value })}
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
