import { useState, useContext } from 'react';
import getPokeInfos from '../../services/getPokeInfos';
import pokeContext from '../../context/pokeContext';
import { headerProp, PropsPokeContext } from '../../types/pokeTypes';

import searchIcon from '../../assets/search-icon.png';

const Header = ({ bg }: headerProp) => {
  const [pokemon, setPokemon] = useState<string>('');

  const context = useContext<PropsPokeContext | null>(pokeContext);
  const id = context?.pokeInfos?.id;

  const searchPokemon = async (pokemon: string): Promise<void> => {
    const result = await getPokeInfos(pokemon);
    console.log(result);
    
    context?.setPokeInfos(result);
  };

  return (
    <header
      className="h-[80px] flex items-center justify-center fixed top-0 w-[100%] lg:relative"
      style={{ backgroundColor: bg }}
    >
      <span className="mr-[30px] text-[18px] text-white">
        {id && Number(id) > 9 ? `#0${id}` : `#00${id}`}
      </span>
      <input
        className="h-[38px] w-[250px] rounded-md text-[18px] p-3"
        type="text"
        placeholder="search a pokemon:"
        onChange={(e) => {
          setPokemon(e.target.value);
        }}
      />
      <button
        className="w-[40px] ml-[-35px]"
        type="button"
        onClick={() => {
          searchPokemon(pokemon);
        }}
      >
        <img src={searchIcon} alt="button search" className="h-[26px]" />
      </button>
    </header>
  );
};

export default Header;
