import { Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getInitials, type Rider } from '../../cycling-data';

@Component({
  selector: 'app-rider-ranking',
  imports: [RouterLink],
  templateUrl: './rider-ranking.html',
  styleUrl: './rider-ranking.scss',
})
export class RiderRankingComponent {
  readonly riders = input<Rider[]>([]);
  protected readonly query = signal('');
  protected readonly showAll = signal(false);
  protected readonly filteredRiders = computed(() => {
    const term = this.query().trim().toLowerCase();
    const matching = this.riders().filter((rider) =>
      `${rider.name} ${rider.team} ${rider.nationality}`.toLowerCase().includes(term),
    );
    return this.showAll() || term ? matching : matching.slice(0, 8);
  });

  protected initials(name: string): string {
    return getInitials(name);
  }

  protected updateQuery(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.query.set(event.target.value);
    }
  }

  protected toggleAll(): void {
    this.showAll.update((value) => !value);
  }
}
