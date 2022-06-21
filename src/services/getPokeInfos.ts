import axios from 'axios';
import { PokeInfos } from '../types/pokeTypes';

const getPokeInfos = async (pokemon: string): Promise<PokeInfos> => {
  const result = await axios
  .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const { data } = result;
  const pokeInfos = {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    types: data.types,
    moves: data.moves,
    sprites: data.sprites.other.home,
    stats: data.stats,
  }
  return pokeInfos;
};

export default getPokeInfos;