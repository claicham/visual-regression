import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { TeamRanking } from '../../cycling-data';

@Component({
  selector: 'app-team-ranking',
  imports: [RouterLink],
  templateUrl: './team-ranking.html',
  styleUrl: './team-ranking.scss',
})
export class TeamRankingComponent {
  readonly teams = input<TeamRanking[]>([]);
}
