import type { Meta, StoryObj } from '@storybook/angular-vite';
import { expect, userEvent, within } from 'storybook/test';
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

export const Top25: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'View all 25 riders' }));
    await expect(canvas.getAllByRole('listitem')).toHaveLength(25);
  },
};

export const CollapseToTopEight: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'View all 25 riders' }));
    await userEvent.click(canvas.getByRole('button', { name: 'Show top 8' }));
    await expect(canvas.getAllByRole('listitem')).toHaveLength(8);
  },
};
export const Compact: Story = { args: { riders: riders.slice(0, 6) } };

export const SearchResults: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('searchbox', { name: 'Search riders' }), 'Belgium');
    await expect(canvas.getAllByRole('listitem')).toHaveLength(3);
    await expect(canvas.getByText('Remco Evenepoel')).toBeVisible();
  },
};

export const NoSearchResults: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('searchbox', { name: 'Search riders' }), 'No Such Rider');
    await expect(canvas.getByText('No riders match “No Such Rider”.')).toBeVisible();
    await expect(canvas.queryByRole('button', { name: 'View all 25 riders' })).toBeNull();
  },
};
