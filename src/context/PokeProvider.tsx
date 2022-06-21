import React, { useState } from 'react';
import { PokeInfos, PokesByGen } from '../types/pokeTypes';
import pokeContext from './pokeContext';

interface IChildrenType {
  children: React.ReactNode;
}

const PokeProvider = (props: IChildrenType) => {
  const [pokeInfos, setPokeInfos] = useState<PokeInfos | null>(null);
  const [pokesByGen, setPokesByGen] = useState<PokesByGen | null>(null);
  
  return (
    <pokeContext.Provider value={{ pokeInfos, setPokeInfos, pokesByGen, setPokesByGen }} >
      {
        props.children
      }
    </pokeContext.Provider>
  );
};

export default PokeProvider;