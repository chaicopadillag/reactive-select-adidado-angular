export interface CountryI {
  name: Name;
  independent?: boolean;
  status: Status;
  cca3: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: Region;
  subregion: Subregion;
  languages: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  borders: string[];
  continents: Region[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
}

interface CapitalInfo {
  latlng: number[];
}

interface Car {
  signs: string[];
  side: Side;
}

enum Side {
  Left = 'left',
  Right = 'right',
}

interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Region {
  asia = 'asia',
  europe = 'europe',
  americas = 'americas',
  africa = 'africa',
  oceania = 'oceania',
}

interface Currencies {
  EUR?: TartuGecko;
  RSD?: TartuGecko;
  DKK?: TartuGecko;
  FOK?: TartuGecko;
  ALL?: TartuGecko;
  GBP?: TartuGecko;
  GIP?: TartuGecko;
  SEK?: TartuGecko;
  ISK?: TartuGecko;
  CHF?: TartuGecko;
  PLN?: TartuGecko;
  JEP?: TartuGecko;
  RON?: TartuGecko;
  NOK?: TartuGecko;
  BYN?: TartuGecko;
  GGP?: TartuGecko;
  CZK?: TartuGecko;
  BAM?: BAM;
  BGN?: TartuGecko;
  MDL?: TartuGecko;
  IMP?: TartuGecko;
  HUF?: TartuGecko;
  MKD?: TartuGecko;
  UAH?: TartuGecko;
  RUB?: TartuGecko;
}

interface TartuGecko {
  name: string;
  symbol: string;
}

interface BAM {
  name: string;
}

interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

interface Eng {
  f: string;
  m: string;
}

interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: Translation };
}

interface Translation {
  official: string;
  common: string;
}

enum StartOfWeek {
  Monday = 'monday',
}

enum Status {
  OfficiallyAssigned = 'officially-assigned',
  UserAssigned = 'user-assigned',
}

enum Subregion {
  CentralEurope = 'Central Europe',
  EasternEurope = 'Eastern Europe',
  NorthernEurope = 'Northern Europe',
  SoutheastEurope = 'Southeast Europe',
  SouthernEurope = 'Southern Europe',
  WesternEurope = 'Western Europe',
}
