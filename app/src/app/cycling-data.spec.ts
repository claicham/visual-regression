import { races, riders, toSlug } from './cycling-data';

describe('cycling season data', () => {
  it('contains the complete, ordered top 25 rider ranking', () => {
    expect(riders).toHaveLength(25);
    expect(riders.map((rider) => rider.rank)).toEqual(
      Array.from({ length: 25 }, (_, index) => index + 1),
    );
    expect(new Set(riders.map((rider) => rider.slug)).size).toBe(25);
  });

  it('includes three grand tours and all five monuments', () => {
    expect(races.filter((race) => race.category === 'Grand Tour')).toHaveLength(3);
    expect(races.filter((race) => race.category === 'Monument')).toHaveLength(5);
  });

  it('keeps a complete top-ten classification and source for every race', () => {
    for (const race of races) {
      expect(race.results.map((result) => result.rank)).toEqual(
        Array.from({ length: 10 }, (_, index) => index + 1),
      );
      expect(race.results[0].rider).toBe(race.winner);
      expect(race.sourceUrl.startsWith('https://')).toBe(true);
    }
  });

  it('normalizes rider names consistently for profile routes', () => {
    expect(toSlug('Tadej Pogačar')).toBe('tadej-pogacar');
    expect(toSlug('Primož Roglič')).toBe('primoz-roglic');
  });
});
