import TitleContent from '../../components/TitleContent';
import Header from '../../components/Header';
import { PokeInfos, PropsPokeContext } from '../../types/pokeTypes';
import pokeContext from '../../context/pokeContext';
import { useContext } from 'react';
import PokeImage from '../../components/PokeImage';
import colorTypes from './colorTypes';
import { colorType } from './colorTypes';
import TypeIcons from '../../components/TypeIcons';

const PokeDex = () => {
  const context = useContext<PropsPokeContext | null>(pokeContext);
  const pokeInfos = context?.pokeInfos;
  const {
    id,
    height,
    weight,
    name,
    sprites,
    types,
    moves,
    stats
  } = pokeInfos as PokeInfos;
  const typeName = types[0].type.name as keyof colorType;
  const typeColor = colorTypes[typeName];
  return (
    <main className="h-[100vh]" style={{ backgroundColor: typeColor}}>
      <Header />
      <TitleContent name={name}/>
      <PokeImage src={sprites.front_default} />
      <TypeIcons />
    </main>
  );
}

export default PokeDex;