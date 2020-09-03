import React from 'react';

const thirdStep = () => {
return(
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
        <Button variant="contained" color="primary">Back</Button>
        <Button variant="contained" color="primary">Submit</Button>
    </>
)
}

export default thirdStep