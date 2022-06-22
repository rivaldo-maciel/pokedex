import { useContext } from "react";
import pokeContext from "../../context/pokeContext";
import { PokeInfos, PropsPokeContext } from "../../types/pokeTypes";
import icons, { typeIcons } from "./icons";

const TypeIcons = () => {
  const context = useContext<PropsPokeContext | null>(pokeContext);
  const pokeInfos = context?.pokeInfos;
  const { types } = pokeInfos as PokeInfos;
  return (
    <div className="flex justify-evenly] mt-[30px] text-white">
      {
        types.map((type) => (
          <div
            className="w-[100%] flex flex-col items-center"
            key={ type.type.name }
          >
            <img
              src={icons[type.type.name as keyof typeIcons]}
              alt="type icon"
              className="w-[60px]"
            />
            <p>{type.type.name}</p>
          </div>
        ))
      }
    </div>
  );
}

export default TypeIcons;