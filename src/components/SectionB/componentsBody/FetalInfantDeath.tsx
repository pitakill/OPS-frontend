import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';

import { spacingApp } from '../../../config';
import SelectVariants from '../../SelectVariants';
import SelectVariantsTime from './SelectVariantsTime';
import SelectVariantsPregnantWoman from './SelectVariantsPregnantWoman';
                     
const FetalInfantDeath = () => (
  <Grid container spacing={spacingApp}>
    <Grid item xs={12} sm={12} lg={12}>
      <Typography component="h2">Muerte fetal o infantil</Typography>
    </Grid>
    <Grid item xs={6} sm={6} lg={6}>
      <Typography component="h4">Embarazo múltiple</Typography>
    </Grid>
    <Grid item xs={6} sm={6} lg={6}>
      <SelectVariants label="Respuesta" />
    </Grid>
    <Grid item xs={6} sm={6} lg={6}>
      <Typography component="h4">Muerte fetal</Typography>
    </Grid>
    <Grid item xs={6} sm={6} lg={6}>
      <SelectVariants label="Respuesta" />
    </Grid>
    <Grid item xs={4} sm={4} lg={4}>
      <Typography component="h4">Si fallece dentro de las 24 hrs, número de horas sobrevividas</Typography>
    </Grid>
    <Grid item xs={2} sm={2} lg={2}>
    {/* Solo si se contesto diferente de 2 - No, en embarazo múltiple o muerte fetal. Se aceptan numéros desde 00 a 24 */}
      <SelectVariantsTime label="horas" />
    </Grid>
    <Grid item xs={2} sm={2} lg={2}>
      <Typography component="h4">Peso al nacer</Typography>
    </Grid>
    <Grid item xs={4} sm={4} lg={4}>
      {/* REVISAR COTAS */}
      <TextField
        id="description-place"
        label="Solo si se contesto diferente de 2 - No, en embarazo múltiple o muerte fetal."
        variant="standard"
        fullWidth
      />
      <FormHelperText>
        (gramos)
      </FormHelperText>   
    </Grid>
    <Grid item xs={4} sm={4} lg={4}>
      <Typography component="h4">Número de semanas completas de embarazo</Typography>
    </Grid>
    <Grid item xs={2} sm={2} lg={2}>
      {/* REVISAR COTAS */}
      <TextField
        id="description-place"
        label="Solo si se contesto diferente de 2 - No, en embarazo múltiple o muerte fetal."
        variant="standard"
        fullWidth
      />
    </Grid>
    <Grid item xs={2} sm={2} lg={2}>
      <Typography component="h4">Edad de la madre</Typography>
    </Grid>
    <Grid item xs={4} sm={4} lg={4}>
      {/* REVISAR COTAS */}
      <TextField
        id="description-place"
        label="Solo si se contesto diferente de 2 - No, en embarazo múltiple o muerte fetal."
        variant="standard"
        fullWidth
      />
      <FormHelperText>
        (años)
      </FormHelperText>   
    </Grid>
    <Grid item xs={12} sm={12} lg={12}>
      <Typography component="h2">Para las mujeres, ¿estaba embarazada la fallecida?</Typography>
    </Grid>
    <Grid item xs={6} sm={6} lg={6}>
    {/* Si el valor de la variable “Sexo” es “2 – MUJER” y el valor en conjunto de las variables “Edad” y “Clave de edad” se encuentra entre “8 años” y “59 años”, se debe registrar una de las siguientes opciones:
1 – EL EMBARAZO
2 – EL PARTO
3 – EL PUERPERIO
4 – 43 DÍAS A 11 MESES DESPUÉS DEL PARTO O ABORTO
5 – NO ESTUVO EMBARAZADA EN LOS ÚLTIMOS 11 MESES PREVIOS A LA MUERTE
En caso contrario, se debe registrar el valor “8 – NO APLICA”. */}
      <SelectVariantsPregnantWoman label="Etapa" />
    </Grid>
    <Grid item xs={3} sm={3} lg={3}>
      <Typography component="h4">¿El embarazo contribuyo a la muerte?</Typography>
    </Grid>
    <Grid item xs={3} sm={3} lg={3}>
    {/* Si en la anterior pregunta se contesto: 1 – EL EMBARAZO
2 – EL PARTO
3 – EL PUERPERIO
4 – 43 DÍAS A 11 MESES DESPUÉS DEL PARTO O ABORTO
5 – NO ESTUVO EMBARAZADA EN LOS ÚLTIMOS 11 MESES PREVIOS A LA MUERTE, entonces aquí se puede seleccionar */}
      <SelectVariants label="Respuesta" />
    </Grid>
  </Grid>
);

export default FetalInfantDeath;
