import type { Meta, StoryObj } from '@storybook/angular-vite';
import { expect, userEvent, within } from 'storybook/test';
import { HomePage } from './home-page';

const meta: Meta<HomePage> = {
  title: 'Peloton/Pages/Season overview',
  component: HomePage,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<HomePage>;

export const Default: Story = {};

export const GrandToursOnly: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Grand tours' }));
    await expect(canvas.getByRole('heading', { name: 'Grand tours' })).toBeVisible();
    await expect(canvas.queryByRole('heading', { name: 'The monuments' })).toBeNull();
    await expect(
      canvas.getAllByRole('link').filter((link) => link.getAttribute('href')?.includes('/races/')),
    ).toHaveLength(3);
  },
};

export const MonumentsOnly: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Monuments' }));
    await expect(canvas.getByRole('heading', { name: 'The monuments' })).toBeVisible();
    await expect(canvas.queryByRole('heading', { name: 'Grand tours' })).toBeNull();
    await expect(
      canvas.getAllByRole('link').filter((link) => link.getAttribute('href')?.includes('/races/')),
    ).toHaveLength(5);
  },
};
