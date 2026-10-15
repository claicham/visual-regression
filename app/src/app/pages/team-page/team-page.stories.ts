import type { Meta, StoryObj } from '@storybook/angular-vite';
import { TeamPage } from './team-page';

const meta: Meta<TeamPage> = {
  title: 'Peloton/Pages/Team profile',
  component: TeamPage,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TeamPage>;

export const UaeTeamEmirates: Story = { args: { slug: 'uae-team-emirates-xrg' } };
export const SingleRiderTeam: Story = { args: { slug: 'pinarello-q36-5-pro-cycling-team' } };
export const NotFound: Story = { args: { slug: 'unknown-team' } };
