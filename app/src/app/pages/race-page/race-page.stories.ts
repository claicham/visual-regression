import type { Meta, StoryObj } from '@storybook/angular-vite';
import { RacePage } from './race-page';

const meta: Meta<RacePage> = {
  title: 'Peloton/Pages/Race detail',
  component: RacePage,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<RacePage>;

export const TourDeFrance: Story = { args: { slug: 'tour-de-france' } };
export const Monument: Story = { args: { slug: 'paris-roubaix' } };
