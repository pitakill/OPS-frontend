import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Main from './components/Main';
import AdministrativeData from './components/AdministrativeData';
import SectionA from './components/SectionA';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12}>
            <Main />
          </Grid>
          <Grid item xs={12}>
            <AdministrativeData />
          </Grid>
          <Grid item xs={12}>
            <SectionA />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
