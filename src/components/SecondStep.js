import React, { useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import { mutliStepContext } from "../StepContext";

export default function SecondStep() {
  const { setStep, userData, setUserData } = useContext(mutliStepContext);

  return (
    <>
      <TextField
        label="Email"
        value={userData['email']}
        variant="outlined"
        margin="normal"
        color="secondary"
      />
      <TextField
        label="Country"
        value={userData['country']}
        variant="outlined"
        margin="normal"
        color="secondary"
      />
      <TextField
        label="District"
        value={userData['district']}
        variant="outlined"
        margin="normal"
        color="secondary"
      />
      <div>
        <Button
          variant="contained"
          onClick={() => setStep(1)}
          color="secondary"
        >
          Back
        </Button>
        <span> </span>
        <Button variant="contained" onClick={() => setStep(3)} color="primary">
          Next
        </Button>
      </div>
    </>
  );
}
