import React, { useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import { mutliStepContext } from "../StepContext";

export default function FirstStep() {
  const { setStep, userData, setUserData } = useContext(mutliStepContext);
  return (
    <>
      <TextField
        label="first name"
        variant="outlined"
        value={userData['firstname']}
        onChange={(e)=>setUserData({...userData, "firstname ":e.target.value})}
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
      <Button variant="contained" onClick={() => setStep(2)} color="primary">
        Next
      </Button>
    </>
  );
}
