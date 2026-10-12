import type { Meta, StoryObj } from '@storybook/angular-vite';
import { expect, within } from 'storybook/test';
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

export const UnrankedFinisher: Story = {
  args: { slug: 'jai-hindley' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', { name: 'Jai Hindley' })).toBeVisible();
    await expect(canvas.getByText('2026 RACE FINISHER')).toBeVisible();
    await expect(canvas.getByText('Giro d’Italia')).toBeVisible();
  },
};

export const RankedWithoutTopTenResults: Story = {
  args: { slug: 'quinn-simmons' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', { name: 'Quinn Simmons' })).toBeVisible();
    await expect(
      canvas.getByText('No top-ten finishes in the 2026 race archive yet.'),
    ).toBeVisible();
  },
};

export const NotFound: Story = {
  args: { slug: 'unknown-rider' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByRole('heading', { name: "No rider by that name in this season's archive." }),
    ).toBeVisible();
    await expect(canvas.getByRole('link', { name: 'Back to the top 25 ↗' })).toBeVisible();
  },
};
