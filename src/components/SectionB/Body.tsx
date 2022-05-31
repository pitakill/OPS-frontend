import * as React from 'react';
import Grid from '@mui/material/Grid';

import General from './componentsBody/General';
import DeathCause from './componentsBody/DeathCause';
import DeathPlace from './componentsBody/DeathPlace';
                     
const Body = () => (
  <Grid item xs={12}>
      <General />
      <DeathCause />
      <DeathPlace />
    </Grid>
);

export default Body;
