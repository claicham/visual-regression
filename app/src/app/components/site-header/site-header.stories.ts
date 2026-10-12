import type { Meta, StoryObj } from '@storybook/angular-vite';
import { SiteHeaderComponent } from './site-header';

const meta: Meta<SiteHeaderComponent> = {
  title: 'Peloton/Navigation/Site header',
  component: SiteHeaderComponent,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SiteHeaderComponent>;

export const Default: Story = {};
