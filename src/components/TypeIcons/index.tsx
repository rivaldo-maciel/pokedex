import { useContext } from 'react';
import pokeContext from '../../context/pokeContext';
import { PropsPokeContext } from '../../types/pokeTypes';
import icons, { typeIcons } from './icons';

const TypeIcons = () => {
  const context = useContext<PropsPokeContext | null>(pokeContext);
  const pokeInfos = context?.pokeInfos;

  return (
    <div className="flex justify-evenly mt-[30px] text-white lg:mt-[50px]">
      {pokeInfos?.types.map((type) => (
        <div
          className="w-[100%] flex flex-col items-center"
          key={type.type.name}
        >
          <img
            src={icons[type.type.name as keyof typeIcons]}
            alt="type icon"
            className="w-[60px]"
          />
          <p>{type.type.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TypeIcons;
