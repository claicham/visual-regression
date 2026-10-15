import type { Meta, StoryObj } from '@storybook/angular-vite';
import { expect } from 'storybook/test';
import { raceStoryFixture } from '../../race-story-fixture';
import { RaceCardComponent } from './race-card';

const meta: Meta<RaceCardComponent> = {
  title: 'Peloton/Races/Race card',
  component: RaceCardComponent,
  tags: ['autodocs'],
  args: { race: raceStoryFixture('tour-de-france') },
};

export default meta;
type Story = StoryObj<RaceCardComponent>;

export const GrandTour: Story = {
  play: () => {
    expect(raceStoryFixture('tour-de-france').category).toBe('Grand Tour');
    expect(() => raceStoryFixture('missing-race')).toThrow(
      'Missing race story fixture: missing-race',
    );
  },
};
export const Monument: Story = { args: { race: raceStoryFixture('milano-sanremo') } };
export const Classic: Story = { args: { race: raceStoryFixture('strade-bianche') } };
