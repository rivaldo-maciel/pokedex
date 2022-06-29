import { statsProp } from '../../types/pokeTypes';

const Stats = ({ stats }: statsProp) => {
  return (
    <section className="text-center mt-[40px] h-[240px] lg:mt-[60px]">
      <h1 className="text-white">Stats</h1>
      <div className="flex mt-[30px] justify-center">
        <div className="w-[150px] border-r border-white text-center text-white">
          <ul>
            {stats?.map((stat, index) => (
              <li key={index}>{stat.stat.name.toLocaleUpperCase()}</li>
            ))}
          </ul>
        </div>
        <div className="pl-2">
          {stats?.map((stat, index) => (
            <div className="flex" key={index}>
              <div
                className="h-[20px] mb-[5px] bg-white"
                style={{ width: (Number(stat.base_stat) * 140) / 160 }}
              ></div>
              <span className="text-white ml-[8px]" key={stat.stat.name}>
                {stat.base_stat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
