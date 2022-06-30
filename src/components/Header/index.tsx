import { useState, useContext } from 'react';
import getPokeInfos from '../../services/getPokeInfos';
import pokeContext from '../../context/pokeContext';
import { headerProp, PropsPokeContext } from '../../types/pokeTypes';

import searchIcon from '../../assets/search-icon.png';

const Header = ({ bg, setLoading }: headerProp) => {
  const [pokemon, setPokemon] = useState<string>('');
  const [badRequest, setBadRequest] = useState<boolean>(false);

  const context = useContext<PropsPokeContext | null>(pokeContext);
  const id = context?.pokeInfos?.id;

  const searchPokemon = async (pokemon: string): Promise<void> => {
    try {
      setLoading(true);
      setBadRequest(false);
      const result = await getPokeInfos(pokemon.toLocaleLowerCase());
      context?.setPokeInfos(result);
      setLoading(false);
    } catch (err) {
      setBadRequest(true);
      setLoading(false);
    }
  };

  return (
    <header
      className="h-[80px] flex items-center justify-center fixed top-0 w-[100%] lg:relative"
      style={{ backgroundColor: bg }}
    >
      <div className="flex flex-col items-center">
        <div className="flex items-center">
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
            className="w-[40px] h-[26px] ml-[-35px]"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              searchPokemon(pokemon);
            }}
          >
            <img src={searchIcon} alt="button search" className="h-[26px]" />
          </button>
        </div>
        <p
          className="text-red-900"
          style={{ visibility: badRequest ? 'visible' : 'hidden' }}
        >
          Sorry, pokemon not found
        </p>
      </div>
    </header>
  );
};

export default Header;
