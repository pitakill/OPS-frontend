import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid } from '@mui/material';


interface SelectVariantsDeathProps {
  label: string;
}

const SelectVariantsDeath = ({ label }: SelectVariantsDeathProps) => {
  const [value, setValue] = React.useState<Date | null>(null);

  const [option, setOption] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };

  return (
    <Grid>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="option-standard-label">Clave</InputLabel>
        <Select
          labelId="option-standard-label"
          id="option-standard-id"
          value={option}
          onChange={handleChange}
          label="Option"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="option-filled-label">{label}</InputLabel>
        <Select
          labelId="option-filled-label"
          id="option-filled-id"
          value={option}
          onChange={handleChange}
        >
          <MenuItem value={0}>Natural (enfermedad)</MenuItem>
          <MenuItem value={1}>Homicidios</MenuItem>
          <MenuItem value={2}>Accidente</MenuItem>
          <MenuItem value={3}>A la espera de la investigación</MenuItem>
          <MenuItem value={4}>El suicidio</MenuItem>
          <MenuItem value={5}>No se pudo determinar (se ignora)</MenuItem>
          <MenuItem value={6}>No rellenado (Desconocido)</MenuItem>
          <MenuItem value={8}>Intervención legal</MenuItem>
          <MenuItem value={9}>Guerra</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectVariantsDeath;