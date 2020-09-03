import React from 'react';
import { TextField, Button } from '@material-ui/core';


const thirdStep = () => {
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
        <Button variant="contained" color="primary">Submit</Button>
    </>
)
}

export default thirdStep