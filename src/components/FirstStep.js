import React from "react";
import { TextField , Button} from '@material-ui/core';


const firstStep = () => {
  return (
    <>
      <TextField
        label="first name"
        variant="outlined"
        margin="normal"
        color="secondary"
      />
      <TextField
        label="last name"
        variant="outlined"
        margin="normal"
        color="secondary"
      />
      <TextField
        label="phone number"
        variant="outlined"
        margin="normal"
        color="secondary"
      />
      <Button variant="contained" color="primary">Next</Button>
    </>
  );
};

export default firstStep;
