import { measurementProp } from '../../types/pokeTypes';

const BodyMeasurement = ({ height, weight }: measurementProp) => {
  return (
    <div className="flex text-white justify-center">
      <div className="flex flex-col items-center">
        <div className="h-[50px] w-[100px] border-b-2 border-r border-white flex items-center justify-center">
          <p className="text-[40px]">{height}</p>
        </div>
        <p>Height</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-[50px] w-[100px] border-b-2 border-l border-white flex items-center justify-center">
          <p className="text-[40px]">{weight}</p>
        </div>
        <p>weight</p>
      </div>
    </div>
  );
};

export default BodyMeasurement;
