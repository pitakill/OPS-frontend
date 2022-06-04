import * as React from 'react';

interface ContextScheme {
  value: string;
  setValue: (value: string) => void;
}

const Context = React.createContext<ContextScheme>({
  value: '',
  setValue: (value: string) => {},
});

export default Context;
