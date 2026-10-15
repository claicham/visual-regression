import { TestBed } from '@angular/core/testing';
import { Router, provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
import { HomePage } from './pages/home-page/home-page';
import { RacePage } from './pages/race-page/race-page';
import { RiderPage } from './pages/rider-page/rider-page';
import { TeamPage } from './pages/team-page/team-page';

describe('app routes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes, withComponentInputBinding())],
    });
  });

  it('loads the season overview at the root path', async () => {
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/', HomePage);

    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain('greatness');
  });

  it('loads a rider profile and binds its slug from the URL', async () => {
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/riders/paul-seixas', RiderPage);

    expect(harness.routeNativeElement?.querySelector('#profile-name')?.textContent).toContain(
      'Paul Seixas',
    );
  });

  it('loads race details from the race slug', async () => {
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/races/tour-de-france', RacePage);

    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain(
      'Tour de France',
    );
  });

  it('loads a team profile from the team slug', async () => {
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/teams/uae-team-emirates-xrg', TeamPage);

    expect(harness.routeNativeElement?.querySelector('#team-name')?.textContent).toContain(
      'UAE Team Emirates XRG',
    );
  });

  it('redirects unknown paths to the season overview', async () => {
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/unknown-route', HomePage);

    expect(TestBed.inject(Router).url).toBe('/');
  });
});
