import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  getInitials,
  races,
  riders,
  rankingDate,
  rankingSource,
  toSlug,
  type Rider,
} from '../../cycling-data';

interface ProfileResult {
  raceSlug: string;
  raceName: string;
  category: string;
  date: string;
  position: number;
  time: string;
  sourceUrl: string;
}

@Component({
  selector: 'app-rider-page',
  imports: [RouterLink],
  templateUrl: './rider-page.html',
  styleUrl: './rider-page.scss',
})
export class RiderPage {
  readonly slug = input('');
  protected readonly rankingDate = rankingDate;
  protected readonly rankingSource = rankingSource;
  protected readonly profile = computed(() => {
    const rankedRider = riders.find((rider) => rider.slug === this.slug());
    if (rankedRider) {
      return {
        rider: rankedRider,
        displayName: rankedRider.name,
        ranked: true,
      };
    }

    const resultRider = races
      .flatMap((race) => race.results.map((result) => result.rider))
      .find((name) => toSlug(name) === this.slug());

    return resultRider
      ? { rider: null, displayName: resultRider, ranked: false }
      : undefined;
  });
  protected readonly results = computed<ProfileResult[]>(() => {
    const riderName = this.profile()?.displayName;
    if (!riderName) {
      return [];
    }

    return races.flatMap((race) => {
      const result = race.results.find(
        (entry) => toSlug(entry.rider) === this.slug(),
      );
      return result
        ? [{
            raceSlug: race.slug,
            raceName: race.name,
            category: race.category,
            date: race.date,
            position: result.rank,
            time: result.time,
            sourceUrl: race.sourceUrl,
          }]
        : [];
    });
  });
  protected readonly podiums = computed(
    () => this.results().filter((result) => result.position <= 3).length,
  );

  protected initials(name: string): string {
    return getInitials(name);
  }

  protected riderTeam(rider: Rider | null): string {
    return rider?.team ?? 'Not listed in the top 25 ranking';
  }
}
