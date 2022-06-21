import { useState } from 'react';
import './styles.css';

const DropDownGen = () => {
  const [gen, setGen] = useState<string>('GEN 1');
  return (
    <div className="drop-down-gen text-gray-800">
      <button
        type="button"
        className="gen bg-white w-[85px] h-[45px] shadow-md font-bold"
      >
        {gen}
      </button>
      <div className="gen-options">
        {
          new Array(8).fill(1)
          .map((gen, index) => (
            <div
              className="border-b border-gray-300 p-[10px] hover:bg-gray-300 w-[85px] font-bold bg-white"
              key={index}
              onClick={(e) => {
                const input = e.target as HTMLElement;
                setGen(input.innerText);
              }}
            >
              {` GEN ${ index + 1 }`}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default DropDownGen;