import type { Meta, StoryObj } from '@storybook/angular-vite';
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
