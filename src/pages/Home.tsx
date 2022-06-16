import Pokedex from '../assets/pokedex-logo.png';
import PokeBall from '../assets/poke-ball.png';

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="h-[300px] bg-red-600 flex flex-col items-center">
        <img
          src={ Pokedex }
          alt="pokedex logo"
          className="w-[288px] mt-[96px]"
        />
        <img
          src={ PokeBall }
          alt="pokeball"
          className="w-[240px] mt-[30px]"
        />
      </div>
      <div className="flex justify-center">
        <div className="h-[160px] w-[280px] bg-red-600 mt-[140px] rounded-[10px] flex flex-col items-center p-[30px] shadow-2xl">
          <input
            type="text"
            className="w-[240px] h-[40px] rounded-[10px] text-[22px] p-[8px]"
            placeholder="Search a pokemon"
          />
          <button
          className="mt-[20px] w-[240px] h-[40px] bg-green-600 rounded-[10px] font-bold text-[25px] text-[white]"
        >
          GO!
        </button>
        </div>
      </div>
    </main>
  )
}
