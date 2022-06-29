import { pokeImageProp } from '../../types/pokeTypes';

const PokeImage = ({ src }: pokeImageProp) => {
  return <img src={src} alt="pokemon" className="mt-[-30px]" />;
};

export default PokeImage;
