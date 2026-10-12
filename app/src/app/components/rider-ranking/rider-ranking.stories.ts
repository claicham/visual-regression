import type { Meta, StoryObj } from '@storybook/angular-vite';
import { riders } from '../../cycling-data';
import { RiderRankingComponent } from './rider-ranking';

const meta: Meta<RiderRankingComponent> = {
  title: 'Peloton/Riders/World ranking',
  component: RiderRankingComponent,
  tags: ['autodocs'],
  args: { riders },
};

export default meta;
type Story = StoryObj<RiderRankingComponent>;

export const Top25: Story = {};
export const Compact: Story = { args: { riders: riders.slice(0, 6) } };
