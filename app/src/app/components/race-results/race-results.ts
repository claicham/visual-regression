import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSlug, type RaceResult } from '../../cycling-data';

@Component({
  selector: 'app-race-results',
  imports: [RouterLink],
  templateUrl: './race-results.html',
  styleUrl: './race-results.scss',
})
export class RaceResultsComponent {
  readonly results = input.required<RaceResult[]>();

  protected slug(name: string): string {
    return toSlug(name);
  }
}
