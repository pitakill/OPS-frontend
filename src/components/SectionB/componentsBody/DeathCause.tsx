import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';

import { spacingApp } from '../../../config';
import DatePicker from '../../DatePicker';
import SelectVariantsDeath from './SelectVariantsDeath';
                     
const DeathCause = () => (
  <Grid container spacing={spacingApp}>
    <Grid item xs={12} sm={12} lg={12}>
      <Typography component="h2">Manera de morir</Typography>
    </Grid>
    <Grid item xs={12} sm={12} lg={12}>
      <SelectVariantsDeath label="Respuesta" />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography component="h4">Si es causa externa o envenenamiento.</Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      {/* Solo si se contesto diferente a 0 - Natural (enfermedad) en la manera de morir. */}
      <DatePicker label="Fecha de lesión" />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography component="h4">Describa cómo se produjo la causa externa (si se trata de una intoxicación, especifique sustancia)</Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        id="description-external-cause"
        label="Solo si se contesto diferente a 0 - Natural (enfermedad) en la manera de morir."
        variant="standard"
        fullWidth
      />
      <FormHelperText>
        Se deben omitir espacios en blanco al inicio y al final de la variable. Los caracteres válidos son 0 – 9, A – Z y Ñ, en mayúsculas, sin acentos, ni caracteres especiales (Solo: "/","(",")","-",",","."). Y sin saltos de línea.
        Texto libre con base a lo que quiera describir el médico certificante.
      </FormHelperText>    
    </Grid>
  </Grid>
);

export default DeathCause;
