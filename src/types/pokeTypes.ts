type moves = {
  move: {
    name: string,
  }
};

type sprites = {
  front_default: string,
  front_shiny: string,
};

type stat = {
  base_stat: string,
  stat: {
    name: string
  }
};

type type ={
  type: {
    name: string
  }
};

export type PokeInfos = {
  id: string,
  name: string,
  height: string,
  weight: string,
  types: Array<type>,
  moves: Array<moves>,
  sprites: sprites,
  stats: Array<stat>
};

export type PokeRequest = {
  data: PokeInfos
};

export type PropsPokeContext = {
  pokeInfos: PokeInfos | null,
  setPokeInfos: (infos: PokeInfos) => void
};

type pokeUrls = {
  name: string,
  url: string
};

export type PokesByGen = {
  next: string,
  results: Array<pokeUrls>
}

export type pokeImageProp = {
  src: string;
}

export type pokeNameProp = {
  name: string;
}