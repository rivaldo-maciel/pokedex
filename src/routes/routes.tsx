import {Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

const PokeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  );
};

export default PokeRoutes;