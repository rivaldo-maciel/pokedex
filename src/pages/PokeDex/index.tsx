import PokemonName from '../../components/PokemonName';
import Header from '../../components/Header';
import { PropsPokeContext } from '../../types/pokeTypes';
import pokeContext from '../../context/pokeContext';
import { useContext, useEffect, useState } from 'react';
import PokeImage from '../../components/PokeImage';
import colorTypes from './colorTypes';
import { colorType } from './colorTypes';
import TypeIcons from '../../components/TypeIcons';
import BodyMeasurement from '../../components/BodyMeasurement';
import Stats from '../../components/Stats';
import Loading from '../../components/Loading';
import getPokeInfos from '../../services/getPokeInfos';

const PokeDex = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const context = useContext<PropsPokeContext | null>(pokeContext);
  const pokeInfos = context?.pokeInfos;
  const typeName = pokeInfos?.types[0].type.name as keyof colorType;
  const typeColor = colorTypes[typeName];

  useEffect(() => {
    if (context?.pokeInfos === null) {
      getPokeInfos('1').then((data) => context?.setPokeInfos(data));
    }
  }, [context]);

  return (
    <main
      className="flex flex-col justify-center items-center lg:h-[100vh]"
      style={{ backgroundColor: typeColor }}
    >
      <Header bg={typeColor} setLoading={setLoading} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="lg:flex lg:justify-between lg:w-[60%]">
            <div>
              <PokemonName name={pokeInfos?.name} />
              <PokeImage src={pokeInfos?.sprites} />
            </div>
            <div className="lg:mt-[50px] h-[100%]">
              <BodyMeasurement
                height={pokeInfos?.height}
                weight={pokeInfos?.weight}
              />
              <TypeIcons />
              <Stats stats={pokeInfos?.stats} />
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default PokeDex;
