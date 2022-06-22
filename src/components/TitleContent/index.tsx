import { pokeNameProp } from '../../types/pokeTypes';

const TitleContent = ({ name }: pokeNameProp) => {
  return (
    <div className="h-[60px] flex justify-center text-white mt-[20px]">
      <h1 className="text-[20px] font-bold">{name}</h1>
    </div>
  );
}

export default TitleContent;