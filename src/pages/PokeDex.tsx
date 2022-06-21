import FilterSection from '../components/FilterSection';
import Header from '../components/Header';

const PokeDex = () => {
  return (
    <main className="bg-gray-200 h-[100vh]">
      <Header />
      <FilterSection />
    </main>
  );
}

export default PokeDex;