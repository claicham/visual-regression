import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { races, toSlug } from '../../cycling-data';
import { RaceResultsComponent } from '../../components/race-results/race-results';

@Component({
  selector: 'app-race-page',
  imports: [RouterLink, RaceResultsComponent],
  templateUrl: './race-page.html',
  styleUrl: './race-page.scss',
})
export class RacePage {
  readonly slug = input('tour-de-france');
  protected readonly race = computed(() => races.find((race) => race.slug === this.slug()));

  protected riderSlug(name: string): string {
    return toSlug(name);
  }
}
