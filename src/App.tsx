import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Main from './components/Main';
import AdministrativeData from './components/AdministrativeData';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';
import Context from './Context';

function App() {
  const [value, setValue] = React.useState<string>('');

  return (
    <Context.Provider value={{ value, setValue }}>
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
          <Grid item xs={12}>
            <SectionB />
          </Grid>
        </Grid>
      </Container>
    </Context.Provider>
  );
}

export default App;
