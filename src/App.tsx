import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PokeRoutes from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <PokeRoutes />
    </BrowserRouter>
  );
}

export default App;
