import type { Meta, StoryObj } from '@storybook/angular-vite';
import { races } from '../../cycling-data';
import { RaceCardComponent } from './race-card';

const meta: Meta<RaceCardComponent> = {
  title: 'Peloton/Races/Race card',
  component: RaceCardComponent,
  tags: ['autodocs'],
  args: { race: races[1] },
};

export default meta;
type Story = StoryObj<RaceCardComponent>;

export const GrandTour: Story = {};
export const Monument: Story = { args: { race: races[4] } };
export const Classic: Story = { args: { race: races[3] } };
