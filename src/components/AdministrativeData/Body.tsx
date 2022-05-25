import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { spacingApp } from '../../config';
import DatePicker from '../DatePicker';

const Body = () => (
  <Grid container spacing={spacingApp}>
    <Grid item xs={12} sm={4} lg={4}>
      <TextField id="administrative-data-id" label="ID" variant="standard" fullWidth />
    </Grid>
    <Grid item xs={12} sm={4} lg={4}>
      <TextField id="administrative-data-gender" label="Sexo" variant="standard" fullWidth />
    </Grid>
    <Grid item xs={12} sm={4} lg={4}>
      <TextField id="administrative-data-age" label="Edad" variant="standard" fullWidth />
    </Grid>
    <Grid item xs={12} sm={6}>
      <DatePicker label="Fecha de nacimiento" />
    </Grid>
    <Grid item xs={12} sm={6}>
      <DatePicker label="Fecha de defunción" />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        id="administrative-data-variable-one"
        label="Variable 1"
        variant="standard"
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        id="administrative-data-variable-two"
        label="Variable 2"
        variant="standard"
        fullWidth
      />
    </Grid>
  </Grid>
);

export default Body;
