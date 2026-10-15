import { races, type Race } from './cycling-data';

export function raceStoryFixture(slug: string): Race {
  const race = races.find((candidate) => candidate.slug === slug);

  if (!race) {
    throw new Error(`Missing race story fixture: ${slug}`);
  }

  return race;
}
