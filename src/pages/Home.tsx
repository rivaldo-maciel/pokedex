import { useNavigate } from 'react-router-dom';
import Pokedex from '../assets/pokedex-logo.png';
import PokeBall from '../assets/poke-ball.png';
import { useContext, useEffect, useState } from 'react';
import pokeContext from '../context/pokeContext';
import axios from 'axios';

import pikachuLoading from '../assets/pikachu-running.gif';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const context = useContext(pokeContext);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then((result) => context?.setPokesByGen(result.data));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [context]);

  return (
    <main className="flex flex-col">
      <div className="h-[300px] bg-red-600 flex flex-col items-center">
        <img src={Pokedex} alt="pokedex logo" className="w-[288px] mt-[96px]" />
        <img src={PokeBall} alt="pokeball" className="w-[240px] mt-[30px]" />
      </div>
      <div className="flex flex-col items-center">
        {
          loading
          ? (
            <>
              <img
              src={pikachuLoading}
              alt="pikachu running"
              className="w-[80px] h-[80px] mt-[160px]"
              />
              <p>loading...</p>
            </>
          ) : (
            <button
            className="mt-[180px] w-[140px] h-[40px] bg-green-700 rounded-[20px] font-bold text-[25px] text-[white]"
            onClick={(e) => {
              e.preventDefault();
              navigate('/pokedex');
            }}
          >
            GO!
            </button>
          )
        }

      </div>
    </main>
  );
}
