import { pokeImageProp } from '../../types/pokeTypes';
import './style.css';

const PokeImage = ({ src }: pokeImageProp) => {
  return <img
    src={src?.front_default}
    alt="pokemon"
    className="poke-image mt-[-30px] w-[0]"
  />;
};

export default PokeImage;
