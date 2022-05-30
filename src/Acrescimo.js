import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const Acrescimo = () => (
  <>
    <Grid item xs={8} sm={3}>
      <TextField
        required
        fullWidth
        id="Acréscimo"
        label="Acréscimo"
        name="Acréscimo"
      />
    </Grid>
    <Grid item xs={8} sm={3}>
      <TextField
        required
        fullWidth
        id="Acréscimo"
        label="Acréscimo"
        name="Acréscimo"
      />
    </Grid>
  </>
);

export default Acrescimo;
