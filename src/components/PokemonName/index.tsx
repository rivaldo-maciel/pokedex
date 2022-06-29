import { pokeNameProp } from '../../types/pokeTypes';

const PokemonName = ({ name }: pokeNameProp) => {
  return (
    <div className="h-[60px] flex justify-center text-white mt-[80px]">
      <h1 className="text-[20px] font-bold">{name}</h1>
    </div>
  );
}

export default PokemonName;