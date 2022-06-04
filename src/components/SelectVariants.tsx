import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid } from '@mui/material';

import Context from '../Context';

interface Item {
  value: string | number;
  text: string;
}

interface Section {
  label: string;
  minWidth: number;
  items: Array<Item>;
}

interface SelectVariantsProps {
  sections: Array<Section>;
}

const SelectVariants = ({ sections }: SelectVariantsProps) => {
  const [option, setOption] = React.useState<string>('');
  const { setValue } = React.useContext(Context);

  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;

    setOption(value);
    setValue(value);
  };

  return (
    <Grid>
      {sections.map((section: Section, i) => (
        <FormControl variant="filled" sx={{ m: 1, minWidth: section.minWidth }} key={i}>
          <InputLabel id={`option-standard-label-${section.label.toLowerCase()}`}>
            {section.label}
          </InputLabel>
          <Select
            labelId={`option-standard-label-${section.label.toLowerCase()}`}
            id={`option-standard-id-${section.label.toLowerCase()}`}
            value={option}
            onChange={handleChange}
            label={section.label}
          >
            {section.items.map(({ value, text }: Item, j) => (
              <MenuItem value={value} key={j}>
                {text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </Grid>
  );
};

export default SelectVariants;
