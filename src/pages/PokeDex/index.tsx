import TitleContent from '../../components/TitleContent';
import Header from '../../components/Header';
import { PokeInfos, PropsPokeContext } from '../../types/pokeTypes';
import pokeContext from '../../context/pokeContext';
import { useContext } from 'react';
import PokeImage from '../../components/PokeImage';
import colorTypes from './colorTypes';
import { colorType } from './colorTypes';
import TypeIcons from '../../components/TypeIcons';
import BodyMeasurement from '../../components/BodyMeasurement';
import Stats from '../../components/Stats';

const PokeDex = () => {
  const context = useContext<PropsPokeContext | null>(pokeContext);
  const pokeInfos = context?.pokeInfos;
  const {
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
    <main className="" style={{ backgroundColor: typeColor}}>
      <Header bg={typeColor}/>
      <TitleContent name={name}/>
      <PokeImage src={sprites.front_default} />
      <TypeIcons />
      <BodyMeasurement height={height} weight={weight} />
      <Stats stats={stats}/>
    </main>
  );
}

export default PokeDex;