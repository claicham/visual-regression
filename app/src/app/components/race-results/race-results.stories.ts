import type { Meta, StoryObj } from '@storybook/angular-vite';
import { raceStoryFixture } from '../../race-story-fixture';
import { RaceResultsComponent } from './race-results';

const meta: Meta<RaceResultsComponent> = {
  title: 'Peloton/Races/Top ten results',
  component: RaceResultsComponent,
  tags: ['autodocs'],
  args: { results: raceStoryFixture('tour-de-france').results },
};

export default meta;
type Story = StoryObj<RaceResultsComponent>;

export const TourDeFrance: Story = {};
export const MonumentPodium: Story = {
  args: { results: raceStoryFixture('tour-of-flanders').results },
};
