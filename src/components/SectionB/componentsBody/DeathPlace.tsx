import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';

import { spacingApp } from '../../../config';
import SelectVariantsPlace from './SelectVariantsPlace';
                     
const DeathPlace = () => (
  <Grid container spacing={spacingApp}>
    <Typography component="h2">Lugar de ocurrencia de la causa externa</Typography>
    <Grid item xs={12} sm={12} lg={12}>
      {/* Si la manera de morir es diferente a enfermedad se activa esta parte*/}
      <SelectVariantsPlace label="Respuesta" />
    </Grid>
    <Grid item xs={4} sm={4} lg={4}>
      <Typography component="h4">Otro lugar (especifique)</Typography>
    </Grid>
    <Grid item xs={8} sm={8} lg={8}>
      {/* Si en la anterior pregunta se selecciono 8 - Otro, se activa esta pregunta */}
      <TextField
        id="description-place"
        label="Si en la anterior pregunta se selecciono 8 - Otro."
        variant="standard"
        fullWidth
      />
      <FormHelperText>
      Se deben omitir espacios en blanco al inicio y al final de la variable. Los caracteres válidos son 0 – 9, A – Z y Ñ, en mayúsculas, sin acentos, ni caracteres especiales. Y sin saltos de línea.
      </FormHelperText>    
    </Grid>
  </Grid>
);

export default DeathPlace;
