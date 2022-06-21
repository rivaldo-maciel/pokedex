import { useNavigate } from 'react-router-dom';
import Pokedex from '../assets/pokedex-logo.png';
import PokeBall from '../assets/poke-ball.png';

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col">
      <div className="h-[300px] bg-red-600 flex flex-col items-center">
        <img src={Pokedex} alt="pokedex logo" className="w-[288px] mt-[96px]" />
        <img src={PokeBall} alt="pokeball" className="w-[240px] mt-[30px]" />
      </div>
      <div className="flex justify-center">
        <button
          className="mt-[220px] w-[140px] h-[40px] bg-green-700 rounded-[20px] font-bold text-[25px] text-[white]"
          onClick={(e) => {
            e.preventDefault();
            navigate('/pokedex');
          }}
        >
          GO!
        </button>
      </div>
    </main>
  );
}
