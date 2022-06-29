import { useNavigate } from 'react-router-dom';
import Pokedex from '../../assets/pokedex-logo.png';
import PokeBall from '../../assets/poke-ball.png';
import pokeContext from '../../context/pokeContext';
import { PropsPokeContext } from '../../types/pokeTypes';
import { useContext, useEffect } from 'react';
import getPokeInfos from '../../services/getPokeInfos';

export default function Home() {
  const context = useContext<PropsPokeContext | null>(pokeContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (context?.pokeInfos === null) {
      getPokeInfos('1').then((data) => context?.setPokeInfos(data));
    }
  }, [context]);

  return (
    <main className="flex flex-col h-[100%] lg:flex-row">
      <div className="bg-slate-800 flex flex-col items-center justify-center h-[100%] lg:w-[50%]">
        <div className="lg: w-[60%] lg: h-[90%]">
          <div className="h-[300px] flex flex-col items-center">
            <img
              src={Pokedex}
              alt="pokedex logo"
              className="w-[288px] mt-[50px]"
            />
            <img
              src={PokeBall}
              alt="pokeball"
              className="w-[240px] mt-[50px]"
            />
          </div>
          <div className="flex flex-col items-center">
            <button
              className="mt-[180px] w-[140px] h-[40px] bg-yellow-500 rounded-[20px] font-bold text-[25px] text-slate-900 shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                navigate('/pokedex');
              }}
            >
              GO!
            </button>
          </div>
        </div>
      </div>
      <div className="hidden w-[50%] lg:block bg-pokemonBg bg-cover"></div>
    </main>
  );
}
