import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid } from '@mui/material';

interface SelectVariantsTimeProps {
  label: string;
}

const SelectVariantsTime = ({ label }: SelectVariantsTimeProps) => {
  const [hour, setHour] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setHour(event.target.value);
  };

  return (
    <Grid>
      <FormControl fullWidth>
        <InputLabel id="time-select-label">Horas</InputLabel>
        <Select
          labelId="time-select-label"
          id="time-simple-select-id"
          value={hour}
          label="Hora"
          onChange={handleChange}
        >
          {[...Array(25)].map((_, i) => (
            <MenuItem value={i} key={i}>
              {`${i}`.padStart(2, '0')}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectVariantsTime;
