import { useState, useContext } from 'react';
import getPokeInfos from "../services/getPokeInfos";
import pokeContext from "../context/pokeContext";
import { PropsPokeContext } from "../types/pokeTypes";

import searchIcon from '../assets/search-icon.png';

const Header = () => {
  const [pokemon, setPokemon] = useState<string>("");

  const context = useContext<PropsPokeContext | null>(pokeContext);

  const searchPokemon = async (): Promise<void> => {
    const result = await getPokeInfos(pokemon);
    context?.setPokeInfos(result);
  };

  return (
    <header className="h-[80px] bg-red-600 shadow-[0_5px_5px_0_rgba(0,0,0,0.3)] flex items-center justify-center">
      <input
        className="h-[38px] rounded-md text-[18px] p-3"
        type="text"
        placeholder="search a pokemon"
        onChange={
          (e) => {
            setPokemon(e.target.value);
          }
        }
      />
      <button
        className="w-[40px] ml-[-35px]"
        type="button"
        onClick={() => {}}
      >
        <img
          src={searchIcon}
          alt="button search"
          className="h-[26px]"
          />
      </button>
      
    </header>
  );
}

export default Header;