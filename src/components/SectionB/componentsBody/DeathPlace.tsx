import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';

import { spacingApp } from '../../../config';
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
        value: 7,
        text: '7',
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
    minWidth: 120,
    items: [
      {
        value: 0,
        text: 'Vivienda particular',
      },
      {
        value: 1,
        text: 'Vivienda colectiva',
      },
      {
        value: 2,
        text: 'Escuela u oficina pública',
      },
      {
        value: 3,
        text: 'Áreas deportivas',
      },
      {
        value: 4,
        text: 'Calle o carretera (vía pública)',
      },
      {
        value: 5,
        text: 'Área comercial o de servicios',
      },
      {
        value: 6,
        text: 'Área industrial (taller, fabrica u obra)',
      },
      {
        value: 7,
        text: 'Granja (rancho o parcela)',
      },
      {
        value: 8,
        text: 'Otro',
      },
      {
        value: 9,
        text: 'Se ignora',
      },
    ],
  },
];

const DeathPlace = () => (
  <Grid container spacing={spacingApp}>
    <Grid item xs={12}>
      <Typography component="h2">Lugar de ocurrencia de la causa externa</Typography>
    </Grid>
    <Grid item xs={12}>
      {/* Si la manera de morir es diferente a enfermedad se activa esta parte*/}
      <SelectVariants sections={sections} />
    </Grid>
    <Grid item xs={4}>
      <Typography component="h4">Otro lugar (especifique)</Typography>
    </Grid>
    <Grid item xs={8}>
      {/* Si en la anterior pregunta se selecciono 8 - Otro, se activa esta pregunta */}
      <TextField
        id="description-place"
        label="Si en la anterior pregunta se selecciono 8 - Otro."
        variant="standard"
        fullWidth
      />
      <FormHelperText>
        Se deben omitir espacios en blanco al inicio y al final de la variable. Los caracteres
        válidos son 0 – 9, A – Z y Ñ, en mayúsculas, sin acentos, ni caracteres especiales. Y sin
        saltos de línea.
      </FormHelperText>
    </Grid>
  </Grid>
);

export default DeathPlace;
