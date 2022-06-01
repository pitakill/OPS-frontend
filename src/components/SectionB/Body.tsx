import * as React from 'react';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import General from './componentsBody/General';
import DeathCause from './componentsBody/DeathCause';
import DeathPlace from './componentsBody/DeathPlace';
import FetalInfantDeath from './componentsBody/FetalInfantDeath';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

const Body = () => (
  <Grid item xs={12} sx={style}>
    <Divider />
      <General />
    <Divider />
      <DeathCause />
    <Divider />
      <DeathPlace />
    <Divider />
      <FetalInfantDeath />
    <Divider />
    </Grid>
);

export default Body;
