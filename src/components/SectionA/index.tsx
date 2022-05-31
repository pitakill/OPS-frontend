import * as React from 'react';
import Grid from '@mui/material/Grid';

import Header from '../Header';
import Body from './Body';

const SectionA = () => (
  <Grid container>
    <Grid item xs={12}>
      <Header text="Sección A Causas de defunción: Parte 1 y Parte 2" />
    </Grid>
    <Grid item xs={12}>
      <Body />
    </Grid>
  </Grid>
);

export default SectionA;
