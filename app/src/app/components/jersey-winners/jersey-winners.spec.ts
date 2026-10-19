import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { races } from '../../cycling-data';
import { JerseyWinnersComponent } from './jersey-winners';

describe('JerseyWinnersComponent', () => {
  const tour = races.find((race) => race.slug === 'tour-de-france')!;

  function setup() {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(JerseyWinnersComponent);
    fixture.componentRef.setInput('jerseys', tour.jerseys);
    fixture.componentRef.setInput('results', tour.results);
    fixture.detectChanges();
    return fixture;
  }

  function render() {
    return setup().nativeElement as HTMLElement;
  }

  it('shows the three jersey holders', () => {
    const holders = Array.from(render().querySelectorAll('.jersey-holder')).map((el) =>
      el.textContent?.trim(),
    );
    expect(holders).toEqual(['Mads Pedersen', 'Richard Carapaz', 'Isaac del Toro']);
  });

  it('switches the table when a tab is selected', () => {
    const fixture = setup();
    const element = fixture.nativeElement as HTMLElement;
    const tabs = element.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    expect(tabs.length).toBe(4);
    expect(element.querySelectorAll('tbody tr').length).toBe(5);

    tabs[1].click();
    fixture.detectChanges();
    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
    expect(element.querySelector('tbody .name-cell a')?.textContent).toContain('Richard Carapaz');
  });

  it('has top-five data for every grand tour jersey', () => {
    for (const race of races.filter((candidate) => candidate.category === 'Grand Tour')) {
      expect(race.jerseys?.points.entries.length).toBe(5);
      expect(race.jerseys?.kom.entries.length).toBe(5);
      expect(race.jerseys?.youth.entries.length).toBeGreaterThan(0);
    }
  });
});
