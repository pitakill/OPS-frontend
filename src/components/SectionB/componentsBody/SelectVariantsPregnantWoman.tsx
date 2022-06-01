import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid } from '@mui/material';


interface SelectVariantsPregnantWomanProps {
  label: string;
}

const SelectVariantsPregnantWoman = ({ label }: SelectVariantsPregnantWomanProps) => {
  const [option, setOption] = React.useState<string | undefined>();

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
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={8}>8</MenuItem>
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
          <MenuItem value={1}>El embarazo</MenuItem>
          <MenuItem value={2}>El parto</MenuItem>
          <MenuItem value={3}>El puerperio</MenuItem>
          <MenuItem value={4}>43 días a 11 meses después del parto o aborto</MenuItem>
          <MenuItem value={5}>No estuvo embarazada en los últimos 11 meses previos a la muerte</MenuItem>
          <MenuItem value={8}>No aplica</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectVariantsPregnantWoman;