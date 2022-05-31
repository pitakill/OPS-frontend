import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';

import { spacingApp } from '../../../config';
import DatePicker from '../../DatePicker';
import SelectVariants from '../../SelectVariants';
                     
const General = () => (
  <Grid container spacing={spacingApp}>
    <Grid item xs={12} sm={6} lg={6}>
      <Typography component="h4">¿Se practicó alguna cirugía en las últimas 4 semanas?</Typography>
    </Grid>
    <Grid item xs={12} sm={6} lg={6}>
     <SelectVariants label="Respuesta" />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography component="h4">Si la respuesta es Sí, especifique la fecha de la cirugía</Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      {/* Sólo si arriba es sí y solo con fecha dentro de las cuatro semanas anteriores a la toma de información */}
      <DatePicker label="Fecha de cirugía" />
    </Grid>
    <Grid item xs={12} sm={6} lg={6}>
      <Typography component="h4">Si la resuesta es Sí, especifique el motivo de la cirugía (enfermedad o afección)</Typography>
    </Grid>
    <Grid item xs={12} sm={6} lg={6}>
      <TextField
        id="description-surgery"
        label="Solo si se contesto 1 - Sí en ¿Se practicó alguna cirugía en las últimas 4 semanas?"
        variant="standard"
        fullWidth
      />
      <FormHelperText>
        Se deben omitir espacios en blanco al inicio y al final de la variable. Los caracteres válidos son 0 – 9, A – Z y Ñ, en mayúsculas, sin acentos, ni caracteres especiales (Solo: "/","(",")","-",",","."). Y sin saltos de línea. Texto libre con base a lo que quiera describir el médico certificante.
      </FormHelperText>    
    </Grid>
    <Grid item xs={12} sm={6} lg={6}>
      <Typography component="h4">¿Se solicitó una autopsia?</Typography>
    </Grid>
    <Grid item xs={12} sm={6} lg={6}>
     <SelectVariants label="Respuesta" />
    </Grid>
    <Grid item xs={12} sm={6} lg={6}>
      <Typography component="h4">Si la respuesta es Sí ¿fueron los hallazgos utilizados en la certificación?</Typography>
    </Grid>
    <Grid item xs={12} sm={6} lg={6}>
     <SelectVariants label="Respuesta" />
    </Grid>
  </Grid>
);

export default General;
