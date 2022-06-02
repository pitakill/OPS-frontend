import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';

import { spacingApp } from '../../../config';
import DatePicker from '../../DatePicker';
import SelectVariants from '../../SelectVariants';

const sections = [
  {
    label: 'Clave',
    minWidth: 80,
    items: [
      {
        value: 0,
        text: '0',
      },
      {
        value: 1,
        text: '1',
      },
      {
        value: 2,
        text: '2',
      },
      {
        value: 3,
        text: '3',
      },
      {
        value: 4,
        text: '4',
      },
      {
        value: 5,
        text: '5',
      },
      {
        value: 6,
        text: '6',
      },
      {
        value: 8,
        text: '8',
      },
      {
        value: 9,
        text: '9',
      },
    ],
  },
  {
    label: 'Respuesta',
    minWidth: 150,
    items: [
      {
        value: 0,
        text: 'Natural (enfermedad)',
      },
      {
        value: 1,
        text: 'Homicidios',
      },
      {
        value: 2,
        text: 'Accidente',
      },
      {
        value: 3,
        text: 'A la espera de la investigación',
      },
      {
        value: 4,
        text: 'El suicidio',
      },
      {
        value: 5,
        text: 'No se pudo determinar (se ignora)',
      },
      {
        value: 6,
        text: 'No rellenado (Desconocido)',
      },
      {
        value: 8,
        text: 'Invervención legal',
      },
      {
        value: 9,
        text: 'Guerra',
      },
    ],
  },
];

const DeathCause = () => (
  <Grid container spacing={spacingApp}>
    <Grid item xs={12}>
      <Typography component="h2">Manera de morir</Typography>
    </Grid>
    <Grid item xs={12}>
      <SelectVariants sections={sections} />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography component="h4">Si es causa externa o envenenamiento.</Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      {/* Solo si se contesto diferente a 0 - Natural (enfermedad) en la manera de morir. */}
      <DatePicker label="Fecha de lesión" />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography component="h4">
        Describa cómo se produjo la causa externa (si se trata de una intoxicación, especifique
        sustancia)
      </Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        id="description-external-cause"
        label="Solo si se contesto diferente a 0 - Natural (enfermedad) en la manera de morir."
        variant="standard"
        fullWidth
      />
      <FormHelperText>
        Se deben omitir espacios en blanco al inicio y al final de la variable. Los caracteres
        válidos son 0 – 9, A – Z y Ñ, en mayúsculas, sin acentos, ni caracteres especiales (Solo:
        "/","(",")","-",",","."). Y sin saltos de línea. Texto libre con base a lo que quiera
        describir el médico certificante.
      </FormHelperText>
    </Grid>
  </Grid>
);

export default DeathCause;
