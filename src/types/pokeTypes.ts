import { Dispatch, SetStateAction } from "react";

type moves = {
  move: {
    name: string;
  };
};

type sprites = {
  front_default: string;
  front_shiny: string;
};

export type stat = {
  base_stat: string;
  stat: {
    name: string;
  };
};

export type type = {
  type: {
    name: string;
  };
};

export type PokeInfos = {
  id: string;
  name: string;
  height: string;
  weight: string;
  types: Array<type>;
  moves: Array<moves>;
  sprites: sprites;
  stats: Array<stat>;
};

export type PokeRequest = {
  data: PokeInfos;
};

export type PropsPokeContext = {
  pokeInfos: PokeInfos | null;
  setPokeInfos: (infos: PokeInfos) => void;
};

type pokeUrls = {
  name: string;
  url: string;
};

export type PokesByGen = {
  next: string;
  results: Array<pokeUrls>;
};

export type pokeImageProp = {
  src: string | undefined;
};

export type pokeNameProp = {
  name: string | undefined;
};

export type iconsProp = {
  icon: string;
  type: string | undefined;
};

export type measurementProp = {
  height: string | undefined;
  weight: string | undefined;
};

export type headerProp = {
  bg: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export type statsProp = {
  stats: Array<stat> | undefined;
};

export type spritesProp = {
  sprites: sprites | undefined;
};
