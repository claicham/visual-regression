import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { Race } from '../../cycling-data';

@Component({
  selector: 'app-race-card',
  imports: [RouterLink],
  templateUrl: './race-card.html',
  styleUrl: './race-card.scss',
})
export class RaceCardComponent {
  readonly race = input.required<Race>();
}
