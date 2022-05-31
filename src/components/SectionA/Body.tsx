import * as React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';

import { spacingApp } from '../../config';

const Body = () => (
  <Grid container spacing={spacingApp}>
    <Grid item xs={2} container>
      <Grid item xs={12} container direction="column">
        <Typography paragraph>1</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph>
          Anote la enfermedad o condición que condujo directamente a la muerte en la línea a
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph>
          Informe la cadena de eventos en el orden "debido a" (si aplica)
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph>
          Anote la causa básica de la defunción de la línea más baja utilizada
        </Typography>
      </Grid>
    </Grid>
    <Grid item xs={5} container>
      <Grid item xs={12}>
        <Typography paragraph>Causas de la defunción</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField id="cause-of-death-a" variant="standard" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField id="cause-of-death-b" variant="standard" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField id="cause-of-death-c" variant="standard" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField id="cause-of-death-d" variant="standard" fullWidth />
      </Grid>
    </Grid>
    <Grid item xs={3} container>
      <Grid item xs={12}>
        <Typography paragraph>Tiempo desde el inicio hasta la muerte</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField id="time-to-death-a" variant="standard" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField id="time-to-death-b" variant="standard" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField id="time-to-death-c" variant="standard" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField id="time-to-death-d" variant="standard" fullWidth />
      </Grid>
    </Grid>
    <Grid item xs={2} container>
      <Grid item xs={12}>
        <Typography paragraph>Códigos CIE-11</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField id="cie-a" variant="standard" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField id="cie-b" variant="standard" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField id="cie-c" variant="standard" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField id="cie-d" variant="standard" fullWidth />
      </Grid>
    </Grid>
    <Grid item xs={12} md={4}>
      Otras condiciones importantes que contribuyen a la muerte (los tiempos pueden incluirse entre
      paréntesis después de cada afección)
    </Grid>
    <Grid item xs={12} md={5}>
      <TextField id="other-conditions" variant="standard" fullWidth />
    </Grid>
    <Grid item xs={12} md={3}>
      <TextField id="other-conditions-cie" variant="standard" fullWidth />
    </Grid>
    <Grid item xs={12} sx={{ textAlign: 'center' }}>
      <Button variant="outlined">Herramienta de codificación de la CIE-11</Button>
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField
        id="cause-of-death-basic"
        label="Causa básica de la defunción"
        variant="standard"
        fullWidth
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField id="aditional-code" label="Código adicional" variant="standard" fullWidth />
    </Grid>
  </Grid>
);

export default Body;
