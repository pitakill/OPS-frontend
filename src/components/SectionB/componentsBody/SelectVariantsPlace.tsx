import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid } from '@mui/material';


interface SelectVariantsPlaceProps {
  label: string;
}

const SelectVariantsPlace = ({ label }: SelectVariantsPlaceProps) => {
  const [option, setOption] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };

  return (
    <Grid>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 80 }}>
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
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="option-filled-label">{label}</InputLabel>
        <Select
          labelId="option-filled-label"
          id="option-filled-id"
          value={option}
          onChange={handleChange}
        >
          <MenuItem value={0}>Vivienda particular</MenuItem>
          <MenuItem value={1}>Vivienda colectiva</MenuItem>
          <MenuItem value={2}>Escuela u oficina pública</MenuItem>
          <MenuItem value={3}>Áreas deportivas</MenuItem>
          <MenuItem value={4}>Calle o carretera (vía pública)</MenuItem>
          <MenuItem value={5}>Área comercial o de servicios</MenuItem>
          <MenuItem value={6}>Área industrial (taller, fabrica u obra)</MenuItem>
          <MenuItem value={7}>Granja (rancho o parcela)</MenuItem>
          <MenuItem value={8}>Otro</MenuItem>
          <MenuItem value={9}>Se ignora</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectVariantsPlace;