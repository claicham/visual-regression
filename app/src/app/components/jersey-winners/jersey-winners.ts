import { Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  riderTeams,
  toSlug,
  type JerseyClassification,
  type JerseyKind,
  type RaceJerseys,
  type RaceResult,
} from '../../cycling-data';

type TabKind = JerseyKind | 'gc';

interface JerseyTab {
  kind: TabKind;
  label: string;
  valueHeading: string;
  note?: string;
  rows: { rank: number; rider: string; team: string; value: string }[];
}

const jerseyShape =
  'M42 8 L21 24 L12 52 L30 60 L35 46 L35 100 Q60 108 85 100 L85 46 L90 60 L108 52 L99 24 L78 8 Q60 24 42 8 Z';

@Component({
  selector: 'app-jersey-winners',
  imports: [RouterLink],
  templateUrl: './jersey-winners.html',
  styleUrl: './jersey-winners.scss',
})
export class JerseyWinnersComponent {
  readonly jerseys = input.required<RaceJerseys>();
  readonly results = input.required<RaceResult[]>();
  readonly idPrefix = input('jersey');

  protected readonly shape = jerseyShape;
  protected readonly activeKind = signal<TabKind>('points');

  protected readonly holders = computed(() => {
    const { points, kom, youth } = this.jerseys();
    return [points, kom, youth].map((jersey) => ({
      jersey,
      holder: jersey.entries[0],
      team: this.team(jersey.entries[0].rider),
    }));
  });

  protected readonly tabs = computed<JerseyTab[]>(() => {
    const { points, kom, youth } = this.jerseys();
    const gc: JerseyTab = {
      kind: 'gc',
      label: 'General',
      valueHeading: 'TIME GAP',
      rows: this.results()
        .slice(0, 5)
        .map((result) => ({
          rank: result.rank,
          rider: result.rider,
          team: this.team(result.rider),
          value: result.rank === 1 ? 'Leader' : result.time,
        })),
    };

    return [points, kom, youth].map((jersey) => this.toTab(jersey)).concat(gc);
  });

  protected readonly activeTab = computed(
    () => this.tabs().find((tab) => tab.kind === this.activeKind()) ?? this.tabs()[0],
  );

  protected select(kind: TabKind): void {
    this.activeKind.set(kind);
  }

  protected onKeydown(event: KeyboardEvent, index: number): void {
    const tabs = this.tabs();
    const offsets: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };
    let next: number;

    if (event.key === 'Home') {
      next = 0;
    } else if (event.key === 'End') {
      next = tabs.length - 1;
    } else if (event.key in offsets) {
      next = (index + offsets[event.key] + tabs.length) % tabs.length;
    } else {
      return;
    }

    event.preventDefault();
    this.select(tabs[next].kind);
    document.getElementById(`${this.idPrefix()}-tab-${tabs[next].kind}`)?.focus();
  }

  protected slug(name: string): string {
    return toSlug(name);
  }

  private team(rider: string): string {
    return riderTeams[rider] ?? '—';
  }

  private toTab(jersey: JerseyClassification): JerseyTab {
    return {
      kind: jersey.kind,
      label: jersey.title,
      valueHeading: jersey.kind === 'youth' ? 'TIME GAP' : 'POINTS',
      note: jersey.note,
      rows: jersey.entries.map((entry) => ({
        rank: entry.rank,
        rider: entry.rider,
        team: this.team(entry.rider),
        value: entry.value,
      })),
    };
  }
}
