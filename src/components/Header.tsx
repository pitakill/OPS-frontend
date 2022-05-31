import * as React from 'react';
import Typography from '@mui/material/Typography';

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => <Typography component="h3">{text}</Typography>;

export default Header;
