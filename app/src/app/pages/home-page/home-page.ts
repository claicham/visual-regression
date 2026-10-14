import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { races, riders, rankingDate, rankingSource, type RaceCategory } from '../../cycling-data';
import { RaceCardComponent } from '../../components/race-card/race-card';
import { RiderRankingComponent } from '../../components/rider-ranking/rider-ranking';

type RaceFilter = 'All races' | RaceCategory;

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, RaceCardComponent, RiderRankingComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  protected readonly filters: RaceFilter[] = ['All races', 'Grand Tour', 'Monument', 'Classic'];
  protected readonly riders = riders;
  protected readonly rankingDate = rankingDate;
  protected readonly rankingSource = rankingSource;
  protected readonly selectedFilter = signal<RaceFilter>('All races');
  protected readonly grandTours = computed(() =>
    races.filter((race) => race.category === 'Grand Tour' && this.isVisible(race.category)),
  );
  protected readonly monuments = computed(() =>
    races.filter((race) => race.category === 'Monument' && this.isVisible(race.category)),
  );
  protected readonly classics = computed(() =>
    races.filter((race) => race.category === 'Classic' && this.isVisible(race.category)),
  );

  protected chooseFilter(filter: RaceFilter): void {
    this.selectedFilter.set(filter);
  }

  private isVisible(category: RaceCategory): boolean {
    return this.selectedFilter() === 'All races' || this.selectedFilter() === category;
  }
}
