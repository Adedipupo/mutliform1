import React, { useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import { mutliStepContext } from "../StepContext";

export default function FirstStep() {
  const { setStep, userData, setUserData } = useContext(mutliStepContext);
  return (
    <>
      <TextField
        label="first name"
        value={userData}
        margin="normal"
        variant="outlined"
        color="secondary"
      />
      <TextField
        label="last name"
        value={userData}
        variant="outlined"
        margin="normal"
        color="secondary"
      />
      <TextField
        label="phone number"
        value={userData}
        variant="outlined"
        margin="normal"
        color="secondary"
      />
      <Button variant="contained" onClick={() => setStep(2)} color="primary">
        Next
      </Button>
    </>
  );
}
