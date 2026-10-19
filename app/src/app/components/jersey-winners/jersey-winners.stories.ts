import type { Meta, StoryObj } from '@storybook/angular-vite';
import { raceStoryFixture } from '../../race-story-fixture';
import { JerseyWinnersComponent } from './jersey-winners';

const tour = raceStoryFixture('tour-de-france');

const meta: Meta<JerseyWinnersComponent> = {
  title: 'Peloton/Races/Jersey winners',
  component: JerseyWinnersComponent,
  tags: ['autodocs'],
  args: { jerseys: tour.jerseys, results: tour.results },
};

export default meta;
type Story = StoryObj<JerseyWinnersComponent>;

export const TourDeFrance: Story = {};
export const Giro: Story = {
  args: {
    jerseys: raceStoryFixture('giro-ditalia').jerseys,
    results: raceStoryFixture('giro-ditalia').results,
  },
};
export const Vuelta: Story = {
  args: {
    jerseys: raceStoryFixture('vuelta-a-espana').jerseys,
    results: raceStoryFixture('vuelta-a-espana').results,
  },
};
