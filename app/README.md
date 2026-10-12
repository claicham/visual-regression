# The Peloton Index

A small Angular component showcase and routed 2026 men's road-cycling season archive. The app includes a UCI rider ranking snapshot, rider profiles, race sections and a top-ten results page for each featured event.

## Run locally

```bash
pnpm start
```

Open `http://localhost:4200/`. Rider profiles use `/riders/:slug`; race results use `/races/:slug`.

## Storybook

```bash
pnpm storybook
pnpm build-storybook
```

Stories live beside their Angular components in `src/app`. The catalogue includes the application shell, season overview, navigation, rider ranking, race cards, race results, rider profiles and race detail pages. Interactions such as searching/filtering and route links can be exercised in the browser.

## Data and sources

The rider list is the UCI men's road world-ranking snapshot dated 5 October 2026. Race results are the published final top-ten classifications for the 2026 Giro d'Italia, Tour de France, Vuelta a España, and the five Monuments. Source links are available from the ranking and each race detail page.

The season dataset is kept in `src/app/cycling-data.ts` so it is easy to update or replace for visual-regression scenarios. The ranking is a dated snapshot, while race pages link to their underlying result source.

## Validation

```bash
pnpm test
pnpm build
```
