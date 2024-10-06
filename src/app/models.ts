export enum PlayerName {
  Eugene = 'Женя',
  Karina = 'Каріна',
  Viktor = 'Віктор',
  Oleh = 'Олег',
  // Alex = 'Саша'
}

export enum Corporation {
  Tharsis = 'Tharsis',
  UNMI = 'UNMI',
  Credicor = 'Credicor',
  Inventrix = 'Inventrix',
  Teractor = 'Teractor',
  EcoLine = 'EcoLine',
  MiningGuild = 'Mining Guild',
  ThorGate = 'ThorGate',
  PhobLog = 'PhoboLog',
  Helion = 'Helion',
  SaturnSystems = 'Saturn Systems',
  Cinematics = 'Cinematics',
  Viron = 'Viron',
  Aphrodite = 'Aphrodite',
  MorningStar = 'Morning Star',
  ManuTech = 'ManuTech',
  Celestic = 'Celestic',
  Recyclon = 'Recyclon',
  ArcadianCommunities = 'Arcadian Communities',
  Splice = 'Splice',
}

export type Player = {
  name: PlayerName,
  corporation: Corporation,
  VP: number
}

export const playersColors: Record<PlayerName, string> = {
  [PlayerName.Eugene]: 'rgb(221,21,64)',
  [PlayerName.Viktor]: 'rgb(39,148,244)',
  [PlayerName.Karina]: 'rgb(74,169,66)',
  [PlayerName.Oleh]: 'rgb(147,114,167)',
  // [PlayerName.Alex]: primaryColor
}

export const primaryColor = 'rgb(100,197,166)';

export type Game = Player[];
