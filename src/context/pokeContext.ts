import { createContext } from 'react';
import { PropsPokeContext } from '../types/pokeTypes';

const pokeContext = createContext<PropsPokeContext | null>(null);

export default pokeContext;
