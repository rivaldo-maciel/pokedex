import PokemonName from '../../components/PokemonName';
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
  const { height, weight, name, sprites, types, stats } =
    pokeInfos as PokeInfos;
  const typeName = types[0].type.name as keyof colorType;
  const typeColor = colorTypes[typeName];
  return (
    <main
      className="flex flex-col justify-center items-center lg:h-[100%]"
      style={{ backgroundColor: typeColor }}
    >
      <Header bg={typeColor} />
      <div className="lg:flex lg:justify-between lg:w-[60%]">
        <div>
          <PokemonName name={name} />
          <PokeImage src={sprites.front_default} />
        </div>
        <div className="lg:mt-[50px]">
          <BodyMeasurement height={height} weight={weight} />
          <TypeIcons />
          <Stats stats={stats} />
        </div>
      </div>
    </main>
  );
};

export default PokeDex;
