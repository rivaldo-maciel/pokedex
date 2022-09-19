import { useNavigate } from 'react-router-dom';
import Pokedex from '../../assets/pokedex-logo.png';
import PokeBall from '../../assets/poke-ball.png';
import './style.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col h-[100vh] lg:flex-row">
      <div className="bg-slate-800 flex flex-col items-center justify-center h-[100%] lg:w-[50%]">
        <div className="lg: w-[60%] lg: h-[90%]">
          <div className="h-[300px] flex flex-col items-center">
            <img
              src={Pokedex}
              alt="pokedex logo"
              className="pokedex-title w-[288px] mt-[50px]"
            />
            <img
              src={PokeBall}
              alt="pokeball"
              className="pokeball w-[240px] mt-[50px]"
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
