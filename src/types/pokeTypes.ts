type moves = {
  move: {
    name: string,
  }
}

type sprites = {
  other: {
    home: {
      front_default: string,
      front_shiny: string,
    }
  }
}

type stat = {
  base_stat: string,
  stat: {
    name: string
  }
}

type type ={
  type: {
    name: string
  }
}

export type PokeInfos = {
  id: string,
  name: string,
  height: string,
  weight: string,
  types: Array<type>,
  moves: Array<moves>,
  sprites: sprites,
  stats: Array<stat>
}

export type PokeRequest = {
  data: PokeInfos
}

export type PropsPokeContext = {
  pokeInfos: PokeInfos | null,
  setPokeInfos: (infos: PokeInfos) => void,
};