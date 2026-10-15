import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { teamRankings } from '../../cycling-data';

@Component({
  selector: 'app-team-page',
  imports: [RouterLink],
  templateUrl: './team-page.html',
  styleUrl: './team-page.scss',
})
export class TeamPage {
  readonly slug = input('');
  protected readonly team = computed(() =>
    teamRankings.find((candidate) => candidate.slug === this.slug()),
  );
}
