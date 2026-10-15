export interface Rider {
  slug: string;
  rank: number;
  name: string;
  nationality: string;
  countryCode: string;
  team: string;
  specialty: string;
}

export interface RaceResult {
  rank: number;
  rider: string;
  time: string;
}

export interface TeamRanking {
  rank: number;
  slug: string;
  name: string;
  score: number;
  riderCount: number;
  topRiders: Rider[];
}

export type RaceCategory = 'Grand Tour' | 'Monument' | 'Classic';

export type RaceArtwork = {
  scene:
    | 'stelvio'
    | 'tourmalet'
    | 'angliru'
    | 'riviera'
    | 'flanders'
    | 'roubaix'
    | 'ardennes'
    | 'lombardia'
    | 'strade'
    | 'omloop';
  feature: string;
  detail: string;
  profilePath: string;
};

export interface Race {
  slug: string;
  name: string;
  shortName: string;
  category: RaceCategory;
  date: string;
  location: string;
  distance: string;
  stages: string;
  accent: string;
  artwork: RaceArtwork;
  sourceUrl: string;
  winner: string;
  results: RaceResult[];
}

export const rankingDate = '05 OCT 2026';
export const rankingSource =
  'https://www.uci.org/discipline/road/6TBjsDD8902tud440iv1Cu?tab=rankings';

export const riders: Rider[] = [
  { slug: 'tadej-pogacar', rank: 1, name: 'Tadej Pogačar', nationality: 'Slovenia', countryCode: 'SI', team: 'UAE Team Emirates XRG', specialty: 'All-rounder' },
  { slug: 'remco-evenepoel', rank: 2, name: 'Remco Evenepoel', nationality: 'Belgium', countryCode: 'BE', team: 'Red Bull – BORA – hansgrohe', specialty: 'Climber · time trialist' },
  { slug: 'isaac-del-toro', rank: 3, name: 'Isaac del Toro', nationality: 'Mexico', countryCode: 'MX', team: 'UAE Team Emirates XRG', specialty: 'Climber' },
  { slug: 'paul-seixas', rank: 4, name: 'Paul Seixas', nationality: 'France', countryCode: 'FR', team: 'Decathlon CMA CGM Team', specialty: 'Climber · time trialist' },
  { slug: 'jonas-vingegaard', rank: 5, name: 'Jonas Vingegaard', nationality: 'Denmark', countryCode: 'DK', team: 'Team Visma | Lease a Bike', specialty: 'Climber' },
  { slug: 'tom-pidcock', rank: 6, name: 'Tom Pidcock', nationality: 'Great Britain', countryCode: 'GB', team: 'Pinarello–Q36.5 Pro Cycling Team', specialty: 'Classics · climber' },
  { slug: 'wout-van-aert', rank: 7, name: 'Wout van Aert', nationality: 'Belgium', countryCode: 'BE', team: 'Team Visma | Lease a Bike', specialty: 'Classics · sprinter' },
  { slug: 'jasper-philipsen', rank: 8, name: 'Jasper Philipsen', nationality: 'Belgium', countryCode: 'BE', team: 'Alpecin–Premier Tech', specialty: 'Sprinter' },
  { slug: 'felix-gall', rank: 9, name: 'Felix Gall', nationality: 'Austria', countryCode: 'AT', team: 'Decathlon CMA CGM Team', specialty: 'Climber' },
  { slug: 'mathieu-van-der-poel', rank: 10, name: 'Mathieu van der Poel', nationality: 'Netherlands', countryCode: 'NL', team: 'Alpecin–Premier Tech', specialty: 'Classics · sprinter' },
  { slug: 'richard-carapaz', rank: 11, name: 'Richard Carapaz', nationality: 'Ecuador', countryCode: 'EC', team: 'EF Education–EasyPost', specialty: 'Climber' },
  { slug: 'lenny-martinez', rank: 12, name: 'Lenny Martinez', nationality: 'France', countryCode: 'FR', team: 'Bahrain Victorious', specialty: 'Climber' },
  { slug: 'mauro-schmid', rank: 13, name: 'Mauro Schmid', nationality: 'Switzerland', countryCode: 'CH', team: 'Team Jayco AlUla', specialty: 'Puncheur' },
  { slug: 'mads-pedersen', rank: 14, name: 'Mads Pedersen', nationality: 'Denmark', countryCode: 'DK', team: 'Lidl–Trek', specialty: 'Classics · sprinter' },
  { slug: 'tobias-halland-johannessen', rank: 15, name: 'Tobias Halland Johannessen', nationality: 'Norway', countryCode: 'NO', team: 'Uno-X Mobility', specialty: 'Climber' },
  { slug: 'christian-scaroni', rank: 16, name: 'Christian Scaroni', nationality: 'Italy', countryCode: 'IT', team: 'XDS Astana Team', specialty: 'Climber · puncheur' },
  { slug: 'romain-gregoire', rank: 17, name: 'Romain Grégoire', nationality: 'France', countryCode: 'FR', team: 'Groupama–FDJ United', specialty: 'Puncheur' },
  { slug: 'mattias-skjelmose', rank: 18, name: 'Mattias Skjelmose', nationality: 'Denmark', countryCode: 'DK', team: 'Lidl–Trek', specialty: 'Climber · puncheur' },
  { slug: 'paul-magnier', rank: 19, name: 'Paul Magnier', nationality: 'France', countryCode: 'FR', team: 'Soudal Quick-Step', specialty: 'Sprinter' },
  { slug: 'benoit-cosnefroy', rank: 20, name: 'Benoît Cosnefroy', nationality: 'France', countryCode: 'FR', team: 'UAE Team Emirates XRG', specialty: 'Puncheur' },
  { slug: 'enric-mas', rank: 21, name: 'Enric Mas', nationality: 'Spain', countryCode: 'ES', team: 'Movistar Team', specialty: 'Climber' },
  { slug: 'tobias-lund-andresen', rank: 22, name: 'Tobias Lund Andresen', nationality: 'Denmark', countryCode: 'DK', team: 'Decathlon CMA CGM Team', specialty: 'Sprinter' },
  { slug: 'quinn-simmons', rank: 23, name: 'Quinn Simmons', nationality: 'United States', countryCode: 'US', team: 'Lidl–Trek', specialty: 'Classics · breakaway rider' },
  { slug: 'brandon-mcnulty', rank: 24, name: 'Brandon McNulty', nationality: 'United States', countryCode: 'US', team: 'UAE Team Emirates XRG', specialty: 'Time trialist · climber' },
  { slug: 'primoz-roglic', rank: 25, name: 'Primož Roglič', nationality: 'Slovenia', countryCode: 'SI', team: 'Red Bull – BORA – hansgrohe', specialty: 'Climber · time trialist' },
];

const ridersByTeam = riders.reduce((teams, rider) => {
  const teamRiders = teams.get(rider.team) ?? [];
  teamRiders.push(rider);
  teams.set(rider.team, teamRiders);
  return teams;
}, new Map<string, Rider[]>());

const unrankedTeamRankings: Omit<TeamRanking, 'rank'>[] = Array.from(
  ridersByTeam,
  ([name, teamRiders]) => {
    const topRiders = teamRiders.slice().sort((left, right) => left.rank - right.rank).slice(0, 3);

    return {
      slug: toSlug(name),
      name,
      score: topRiders.reduce((score, rider) => score + (riders.length + 1 - rider.rank), 0),
      riderCount: teamRiders.length,
      topRiders,
    };
  },
);

export const teamRankings: TeamRanking[] = unrankedTeamRankings
  .slice()
  .sort((left, right) => right.score - left.score)
  .map((team, index) => ({ ...team, rank: index + 1 }));

export const races: Race[] = [
  {
    slug: 'giro-ditalia',
    name: 'Giro d’Italia',
    shortName: 'GIRO',
    category: 'Grand Tour',
    date: '8–31 MAY',
    location: 'Bulgaria · Italy',
    distance: '3,459 km',
    stages: '21 stages',
    accent: '#cf5a6a',
    artwork: {
      scene: 'stelvio',
      feature: 'QUEEN STAGE',
      detail: 'PASSO DELLO STELVIO',
      profilePath: 'M0 65 C32 64 42 53 67 56 S95 66 119 49 150 61 171 35 204 14 230 48 263 56 285 28 315 10 337 38 350 33 360 17',
    },
    sourceUrl: 'https://www.cyclingstage.com/giro-2026-results/',
    winner: 'Jonas Vingegaard',
    results: [
      { rank: 1, rider: 'Jonas Vingegaard', time: '81:42:16' },
      { rank: 2, rider: 'Felix Gall', time: '+5:22' },
      { rank: 3, rider: 'Jai Hindley', time: '+6:25' },
      { rank: 4, rider: 'Thymen Arensman', time: '+7:02' },
      { rank: 5, rider: 'Derek Gee-West', time: '+7:56' },
      { rank: 6, rider: 'Afonso Eulálio', time: '+9:39' },
      { rank: 7, rider: 'Michael Storer', time: '+10:13' },
      { rank: 8, rider: 'Davide Piganzoli', time: '+10:52' },
      { rank: 9, rider: 'Damiano Caruso', time: '+11:24' },
      { rank: 10, rider: 'Egan Bernal', time: '+12:54' },
    ],
  },
  {
    slug: 'tour-de-france',
    name: 'Tour de France',
    shortName: 'LE TOUR',
    category: 'Grand Tour',
    date: '4–26 JUL',
    location: 'Barcelona · Paris',
    distance: '3,333 km',
    stages: '21 stages',
    accent: '#e0b945',
    artwork: {
      scene: 'tourmalet',
      feature: 'QUEEN STAGE',
      detail: 'COL DU TOURMALET',
      profilePath: 'M0 66 C38 64 48 56 78 58 S112 62 133 43 161 53 181 27 205 12 226 47 248 58 272 36 300 16 322 45 340 40 360 24',
    },
    sourceUrl: 'https://www.cyclingstage.com/tour-de-france-2026-results/',
    winner: 'Tadej Pogačar',
    results: [
      { rank: 1, rider: 'Tadej Pogačar', time: '83:17:29' },
      { rank: 2, rider: 'Remco Evenepoel', time: '+6:26' },
      { rank: 3, rider: 'Isaac del Toro', time: '+9:42' },
      { rank: 4, rider: 'Paul Seixas', time: '+11:56' },
      { rank: 5, rider: 'Lenny Martinez', time: '+13:02' },
      { rank: 6, rider: 'Mattias Skjelmose', time: '+14:59' },
      { rank: 7, rider: 'Juan Ayuso', time: '+17:48' },
      { rank: 8, rider: 'Richard Carapaz', time: '+20:00' },
      { rank: 9, rider: 'Tom Pidcock', time: '+29:28' },
      { rank: 10, rider: 'Jordan Jegat', time: '+33:21' },
    ],
  },
  {
    slug: 'vuelta-a-espana',
    name: 'Vuelta a España',
    shortName: 'LA VUELTA',
    category: 'Grand Tour',
    date: '22 AUG–13 SEP',
    location: 'Monaco · Granada',
    distance: '3,272 km',
    stages: '21 stages',
    accent: '#df7452',
    artwork: {
      scene: 'angliru',
      feature: 'QUEEN STAGE',
      detail: 'ALTO DE L’ANGLIRU',
      profilePath: 'M0 64 C46 63 58 59 88 61 S122 64 145 51 175 58 193 37 216 52 235 28 255 43 271 17 288 32 309 9 C327 23 344 13 360 17',
    },
    sourceUrl: 'https://www.cyclingstage.com/vuelta-2026-results/',
    winner: 'Enric Mas',
    results: [
      { rank: 1, rider: 'Enric Mas', time: '79:13:48' },
      { rank: 2, rider: 'Primož Roglič', time: '+2:15' },
      { rank: 3, rider: 'Felix Gall', time: '+2:44' },
      { rank: 4, rider: 'Richard Carapaz', time: '+6:54' },
      { rank: 5, rider: 'Sepp Kuss', time: '+8:45' },
      { rank: 6, rider: 'Oscar Onley', time: '+9:28' },
      { rank: 7, rider: 'Jakob Omrzel', time: '+10:38' },
      { rank: 8, rider: 'Clément Berthet', time: '+11:41' },
      { rank: 9, rider: 'Christián Rodríguez', time: '+11:59' },
      { rank: 10, rider: 'Harold Tejada', time: '+14:40' },
    ],
  },
  {
    slug: 'strade-bianche',
    name: 'Strade Bianche',
    shortName: 'LE STRADE BIANCHE',
    category: 'Classic',
    date: '7 MAR',
    location: 'Siena · Siena',
    distance: '215 km',
    stages: 'One day',
    accent: '#b98d57',
    artwork: {
      scene: 'strade',
      feature: 'WHITE ROADS',
      detail: 'LE TOLFE · SIENA',
      profilePath: 'M0 62 C24 60 38 49 54 57 S78 64 94 42 111 57 128 34 146 53 163 29 181 48 198 24 216 46 236 31 254 52 274 35 292 54 310 39 C329 51 346 30 360 39',
    },
    sourceUrl: 'https://www.cyclingstage.com/strade-bianche-2026-results/',
    winner: 'Tadej Pogačar',
    results: [
      { rank: 1, rider: 'Tadej Pogačar', time: '4:58:12' },
      { rank: 2, rider: 'Tom Pidcock', time: '+0:43' },
      { rank: 3, rider: 'Isaac del Toro', time: '+1:18' },
      { rank: 4, rider: 'Mathieu van der Poel', time: '+1:52' },
      { rank: 5, rider: 'Remco Evenepoel', time: '+2:06' },
      { rank: 6, rider: 'Paul Seixas', time: '+2:31' },
      { rank: 7, rider: 'Romain Grégoire', time: '+3:04' },
      { rank: 8, rider: 'Mauro Schmid', time: '+3:38' },
      { rank: 9, rider: 'Christian Scaroni', time: '+4:02' },
      { rank: 10, rider: 'Alessandro Covi', time: '+4:27' },
    ],
  },
  {
    slug: 'omloop-het-nieuwsblad',
    name: 'Omloop Het Nieuwsblad',
    shortName: 'OMLOOP',
    category: 'Classic',
    date: '28 FEB',
    location: 'Ghent · Ninove',
    distance: '207 km',
    stages: 'One day',
    accent: '#728565',
    artwork: {
      scene: 'omloop',
      feature: 'COBBLED FINALE',
      detail: 'MUUR VAN GERAARDSBERGEN',
      profilePath: 'M0 61 C28 60 43 53 59 57 S81 64 97 45 116 58 132 38 151 55 169 32 188 49 206 26 225 46 244 35 263 51 282 38 300 55 320 29 340 47 360 34',
    },
    sourceUrl: 'https://en.wikipedia.org/wiki/2026_Omloop_Het_Nieuwsblad',
    winner: 'Mathieu van der Poel',
    results: [
      { rank: 1, rider: 'Mathieu van der Poel', time: "4h 53' 55\"" },
      { rank: 2, rider: 'Tim van Dijke', time: '+0:22' },
      { rank: 3, rider: 'Florian Vermeersch', time: '+0:24' },
      { rank: 4, rider: 'Christophe Laporte', time: '+0:53' },
      { rank: 5, rider: 'Aimé De Gendt', time: '+0:54' },
      { rank: 6, rider: 'Tobias Lund Andresen', time: '+0:57' },
      { rank: 7, rider: 'Jordi Meeus', time: '+0:57' },
      { rank: 8, rider: 'Anthony Turgis', time: '+0:57' },
      { rank: 9, rider: 'Alexis Renard', time: '+0:57' },
      { rank: 10, rider: 'Luke Lamperti', time: '+0:57' },
    ],
  },
  {
    slug: 'milano-sanremo',
    name: 'Milano–Sanremo',
    shortName: 'LA CLASSICISSIMA',
    category: 'Monument',
    date: '21 MAR',
    location: 'Pavia · Sanremo',
    distance: '298 km',
    stages: 'One day',
    accent: '#df7452',
    artwork: {
      scene: 'riviera',
      feature: 'THE FINALE',
      detail: 'POGGIO · RIVIERA',
      profilePath: 'M0 62 C42 59 64 63 98 57 C132 55 164 59 196 54 C226 56 254 48 281 53 C305 35 325 24 337 51 S348 57 360 54',
    },
    sourceUrl: 'https://www.cyclingstage.com/milan-san-remo-2026/results-msr-2026/',
    winner: 'Tadej Pogačar',
    results: [
      { rank: 1, rider: 'Tadej Pogačar', time: '6:35:49' },
      { rank: 2, rider: 'Tom Pidcock', time: 's.t.' },
      { rank: 3, rider: 'Wout van Aert', time: '+0:04' },
      { rank: 4, rider: 'Mads Pedersen', time: 's.t.' },
      { rank: 5, rider: 'Connor Swift', time: 's.t.' },
      { rank: 6, rider: 'Andrea Vendrame', time: 's.t.' },
      { rank: 7, rider: 'Jasper Stuyven', time: 's.t.' },
      { rank: 8, rider: 'Mathieu van der Poel', time: 's.t.' },
      { rank: 9, rider: 'Matteo Trentin', time: 's.t.' },
      { rank: 10, rider: 'Edoardo Zambanini', time: 's.t.' },
    ],
  },
  {
    slug: 'tour-of-flanders',
    name: 'Tour of Flanders',
    shortName: 'RONDE',
    category: 'Monument',
    date: '5 APR',
    location: 'Antwerp · Oudenaarde',
    distance: '278 km',
    stages: 'One day',
    accent: '#c48b54',
    artwork: {
      scene: 'flanders',
      feature: 'COBBLED CLIMB',
      detail: 'OUDE KWAREMONT',
      profilePath: 'M0 62 C30 61 44 50 61 58 S85 65 101 42 120 23 135 58 151 62 168 45 189 28 205 57 221 63 241 37 262 19 278 54 300 61 321 39 340 31 360 42',
    },
    sourceUrl: 'https://www.cyclingstage.com/tour-of-flanders-2026/results-rvv-2026/',
    winner: 'Tadej Pogačar',
    results: [
      { rank: 1, rider: 'Tadej Pogačar', time: '6:20:07' },
      { rank: 2, rider: 'Mathieu van der Poel', time: '+0:34' },
      { rank: 3, rider: 'Remco Evenepoel', time: '+1:11' },
      { rank: 4, rider: 'Wout van Aert', time: '+2:04' },
      { rank: 5, rider: 'Mads Pedersen', time: '+2:48' },
      { rank: 6, rider: 'Jasper Stuyven', time: '+4:28' },
      { rank: 7, rider: 'Florian Vermeersch', time: '+4:28' },
      { rank: 8, rider: 'Matej Mohorič', time: '+4:30' },
      { rank: 9, rider: 'Christophe Laporte', time: '+5:22' },
      { rank: 10, rider: 'Gianni Vermeersch', time: '+5:22' },
    ],
  },
  {
    slug: 'paris-roubaix',
    name: 'Paris–Roubaix',
    shortName: 'HELL OF THE NORTH',
    category: 'Monument',
    date: '12 APR',
    location: 'Compiègne · Roubaix',
    distance: '258 km',
    stages: 'One day',
    accent: '#606c60',
    artwork: {
      scene: 'roubaix',
      feature: 'PAVÉ SECTOR',
      detail: 'ARENBERG FOREST',
      profilePath: 'M0 51 L26 49 42 52 58 48 74 51 90 47 106 50 122 46 138 50 154 47 170 52 186 48 202 51 218 46 234 50 250 47 266 51 282 48 298 52 314 49 330 51 346 48 360 50',
    },
    sourceUrl: 'https://www.cyclingstage.com/paris-roubaix-2026/results-pr-2026/',
    winner: 'Wout van Aert',
    results: [
      { rank: 1, rider: 'Wout van Aert', time: '5:16:52' },
      { rank: 2, rider: 'Tadej Pogačar', time: 's.t.' },
      { rank: 3, rider: 'Jasper Stuyven', time: '+0:13' },
      { rank: 4, rider: 'Mathieu van der Poel', time: '+0:15' },
      { rank: 5, rider: 'Christophe Laporte', time: '+0:15' },
      { rank: 6, rider: 'Mick van Dijke', time: '+0:15' },
      { rank: 7, rider: 'Mads Pedersen', time: '+0:15' },
      { rank: 8, rider: 'Stefan Bissegger', time: '+0:20' },
      { rank: 9, rider: 'Nils Politt', time: '+2:36' },
      { rank: 10, rider: 'Mike Teunissen', time: '+2:36' },
    ],
  },
  {
    slug: 'liege-bastogne-liege',
    name: 'Liège–Bastogne–Liège',
    shortName: 'LA DOYENNE',
    category: 'Monument',
    date: '26 APR',
    location: 'Liège · Liège',
    distance: '259 km',
    stages: 'One day',
    accent: '#ad705a',
    artwork: {
      scene: 'ardennes',
      feature: 'ARDENNES RAMP',
      detail: 'CÔTE DE LA REDOUTE',
      profilePath: 'M0 64 C24 62 34 50 50 55 S75 65 91 44 113 23 132 56 154 61 172 42 191 18 211 52 236 58 252 33 274 14 294 49 C316 55 337 34 360 38',
    },
    sourceUrl: 'https://www.cyclingstage.com/liege-bastogne-liege-2026/results-lbl-2026/',
    winner: 'Tadej Pogačar',
    results: [
      { rank: 1, rider: 'Tadej Pogačar', time: '5:50:28' },
      { rank: 2, rider: 'Paul Seixas', time: '+0:45' },
      { rank: 3, rider: 'Remco Evenepoel', time: '+1:42' },
      { rank: 4, rider: 'Emiel Verstrynge', time: '+1:42' },
      { rank: 5, rider: 'Egan Bernal', time: '+1:42' },
      { rank: 6, rider: 'Pello Bilbao', time: '+1:42' },
      { rank: 7, rider: 'Romain Grégoire', time: '+1:42' },
      { rank: 8, rider: 'Christian Scaroni', time: '+1:42' },
      { rank: 9, rider: 'Tobias Halland Johannessen', time: '+1:42' },
      { rank: 10, rider: 'Filippo Zana', time: '+1:42' },
    ],
  },
  {
    slug: 'il-lombardia',
    name: 'Il Lombardia',
    shortName: 'RACE OF THE FALLING LEAVES',
    category: 'Monument',
    date: '10 OCT',
    location: 'Como · Bergamo',
    distance: '241 km',
    stages: 'One day',
    accent: '#728565',
    artwork: {
      scene: 'lombardia',
      feature: 'LAKE ROAD',
      detail: 'MADONNA DEL GHISALLO',
      profilePath: 'M0 65 C28 63 42 53 66 57 S92 65 115 43 143 19 165 54 186 61 209 39 234 15 256 50 279 57 303 33 C328 21 346 42 360 35',
    },
    sourceUrl: 'https://www.giroditalia.it/en/news/paul-seixas-wins-the-120th-edition-of-il-lombardia/',
    winner: 'Paul Seixas',
    results: [
      { rank: 1, rider: 'Paul Seixas', time: '5:49:28' },
      { rank: 2, rider: 'Enric Mas', time: '+0:48' },
      { rank: 3, rider: 'Giulio Ciccone', time: '+1:05' },
      { rank: 4, rider: 'Remco Evenepoel', time: '+1:20' },
      { rank: 5, rider: 'Brandon McNulty', time: '+1:20' },
      { rank: 6, rider: 'Tom Pidcock', time: '+1:20' },
      { rank: 7, rider: 'Pello Bilbao', time: '+1:20' },
      { rank: 8, rider: 'Christian Scaroni', time: '+1:20' },
      { rank: 9, rider: 'Filippo Zana', time: '+1:20' },
      { rank: 10, rider: 'Mathys Rondel', time: '+1:20' },
    ],
  },
];

export function getInitials(name: string): string {
  return name
    .split(' ')
    .filter((part) => /^[A-ZÀ-Þ]/u.test(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join('');
}

export function toSlug(name: string): string {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
