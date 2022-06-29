import BugIcon from '../../assets/TypeIcons/Pokemon_Type_Icon_Bug.png';
import DarkIcon from '../../assets/TypeIcons/Pokemon_Type_Icon_Dark.png';
import DragonIcon from '../../assets/TypeIcons/Pokemon_Type_Icon_Dragon.png';
import ElectricIcon from '../../assets/TypeIcons/Pokemon_Type_Icon_Electric.png';
import FairyIcon from '../../assets/TypeIcons/Pokemon_Type_Icon_Fairy.png';
import FightingIcon from '../../assets/TypeIcons/Pokemon_Type_Icon_Fighting.png';
import FireIcon from '../../assets/TypeIcons/Pokemon_Type_Icon_Fire.png';
import FlyingIcon from '../../assets/TypeIcons/Pokemon_Type_Icon_Flying.png';
import GhostIcon from '../../assets/TypeIcons/Pokemon_Type_Icon_Ghost.png';
import GrassIcon from '../../assets/TypeIcons/Pokemon_Type_Icon_Grass.png';
import GroundIcon from '../../assets/TypeIcons/Pokemon_Type_Icon_Ground.png';
import IceIcon from '../../assets/TypeIcons/Pokemon_Type_Icon_Ice.png';
import NormalIcon from '../../assets/TypeIcons/Pokemon_Type_Icon_Normal.png';
import PoisonIcon from '../../assets/TypeIcons/Pokemon_Type_Icon_Poison.png';
import PsychicIcon from '../../assets/TypeIcons/Pokemon_Type_Icon_Psychic.png';
import RockIcon from '../../assets/TypeIcons/Pokemon_Type_Icon_Rock.png';
import SteelIcon from '../../assets/TypeIcons/Pokemon_Type_Icon_Steel.png';
import WaterIcon from '../../assets/TypeIcons/Pokemon_Type_Icon_Water.png';

export type typeIcons = {
  grass: string;
  bug: string;
  dark: string;
  dragon: string;
  electric: string;
  fairy: string;
  fighting: string;
  fire: string;
  flying: string;
  ghost: string;
  ground: string;
  ice: string;
  normal: string;
  poison: string;
  psychic: string;
  rock: string;
  steel: string;
  water: string;
};

const icons: typeIcons = {
  bug: BugIcon,
  dark: DarkIcon,
  dragon: DragonIcon,
  electric: ElectricIcon,
  fairy: FairyIcon,
  fighting: FightingIcon,
  fire: FireIcon,
  flying: FlyingIcon,
  ghost: GhostIcon,
  grass: GrassIcon,
  ground: GroundIcon,
  ice: IceIcon,
  normal: NormalIcon,
  poison: PoisonIcon,
  psychic: PsychicIcon,
  rock: RockIcon,
  steel: SteelIcon,
  water: WaterIcon
};

export default icons;
