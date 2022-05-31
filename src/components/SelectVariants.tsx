import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid } from '@mui/material';


interface SelectVariantsProps {
  label: string;
}

const SelectVariants = ({ label }: SelectVariantsProps) => {
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
          <MenuItem value=""><em>Ninguno</em></MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
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
          <MenuItem value=""><em>Ninguno</em></MenuItem>
          <MenuItem value={1}>Sí</MenuItem>
          <MenuItem value={2}>No</MenuItem>
          <MenuItem value={9}>Se ignora</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectVariants;