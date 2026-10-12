import type { Meta, StoryObj } from '@storybook/angular-vite';
import { races } from '../../cycling-data';
import { RaceResultsComponent } from './race-results';

const meta: Meta<RaceResultsComponent> = {
  title: 'Peloton/Races/Top ten results',
  component: RaceResultsComponent,
  tags: ['autodocs'],
  args: { results: races[1].results },
};

export default meta;
type Story = StoryObj<RaceResultsComponent>;

export const TourDeFrance: Story = {};
export const MonumentPodium: Story = { args: { results: races[6].results } };
