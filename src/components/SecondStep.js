import React from 'react';
import { TextField, Button } from '@material-ui/core';


const secondStep = () => {
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
        <Button variant="contained" color="primary">Back</Button>
        <Button variant="contained" color="primary">Next</Button>
    </>
)
}

export default secondStep