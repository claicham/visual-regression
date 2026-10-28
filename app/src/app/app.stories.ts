import type { Meta, StoryObj } from '@storybook/angular-vite';
import { App } from './app';
import { routes } from './app.routes';

const meta: Meta<App> = {
  title: 'Peloton/Application',
  component: App,
  parameters: { layout: 'fullscreen', routes },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<App>;

export const SeasonOverview: Story = {};
