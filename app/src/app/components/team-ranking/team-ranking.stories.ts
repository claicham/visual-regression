import type { Meta, StoryObj } from '@storybook/angular-vite';
import { teamRankings } from '../../cycling-data';
import { TeamRankingComponent } from './team-ranking';

const meta: Meta<TeamRankingComponent> = {
  title: 'Peloton/Teams/Team index',
  component: TeamRankingComponent,
  tags: ['autodocs'],
  args: { teams: teamRankings },
};

export default meta;
type Story = StoryObj<TeamRankingComponent>;

export const Default: Story = {};
