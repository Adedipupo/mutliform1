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
        onChange={(e) => setUserData({ ...userData, "email": e.target.value })}
        variant="outlined"
        margin="normal"
        color="secondary"
      />
      <TextField
        label="Country"
        value={userData['country']}
        onChange={(e) => setUserData({ ...userData, "country": e.target.value })}
        variant="outlined"
        margin="normal"
        color="secondary"
      />
      <TextField
        label="District"
        value={userData['district']}
        onChange={(e) => setUserData({ ...userData, "district": e.target.value })}
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
