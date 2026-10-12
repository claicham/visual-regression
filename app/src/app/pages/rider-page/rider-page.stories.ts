import type { Meta, StoryObj } from '@storybook/angular-vite';
import { RiderPage } from './rider-page';

const meta: Meta<RiderPage> = {
  title: 'Peloton/Pages/Rider profile',
  component: RiderPage,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<RiderPage>;

export const TadejPogačar: Story = { args: { slug: 'tadej-pogacar' } };
export const PaulSeixas: Story = { args: { slug: 'paul-seixas' } };
