import SpinPokeBall from '../../assets/pokeball-loading.png';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] opacity-[0.5]">
      <img
        src={SpinPokeBall}
        alt="pokeball"
        className="w-[40px] animate-bounce"
      />
      <p>Loading...</p>
    </div>
  );
}

export default Loading;