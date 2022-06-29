import React, { useState } from 'react';
import { PokeInfos } from '../types/pokeTypes';
import pokeContext from './pokeContext';

interface IChildrenType {
  children: React.ReactNode;
}

const PokeProvider = (props: IChildrenType) => {
  const [pokeInfos, setPokeInfos] = useState<PokeInfos | null>(null);

  return (
    <pokeContext.Provider value={{ pokeInfos, setPokeInfos }}>
      {props.children}
    </pokeContext.Provider>
  );
};

export default PokeProvider;
