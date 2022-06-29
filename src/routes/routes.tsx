import { Routes, Route } from 'react-router-dom';
import PokeProvider from '../context/PokeProvider';
import Home from '../pages/Home';
import PokeDex from '../pages/PokeDex';

const PokeRoutes = () => {
  return (
    <PokeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<PokeDex />} />
      </Routes>
    </PokeProvider>
  );
};

export default PokeRoutes;
