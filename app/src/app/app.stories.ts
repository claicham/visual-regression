import type { Meta, StoryObj } from '@storybook/angular-vite';
import { App } from './app';

const meta: Meta<App> = {
  title: 'Peloton/Application',
  component: App,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<App>;

export const SeasonOverview: Story = {};
