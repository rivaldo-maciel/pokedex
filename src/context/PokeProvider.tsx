import React, { useState } from 'react';
import pokeContext from './pokeContext';

interface IProps {
  children: React.ReactNode;
}

const PokeProvider = (props: IProps) => {
  const [pokeInfos, setPokeInfos] = useState({})
  return (
    <pokeContext.Provider value={{ pokeInfos, setPokeInfos }} >
      {
        props.children
      }
    </pokeContext.Provider>
  );
};

export default PokeProvider;