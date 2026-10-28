import { applicationConfig, type Preview } from '@storybook/angular-vite';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  type Routes,
} from '@angular/router';
import '../src/styles.scss';

// Matches any URL so the initial navigation succeeds, without rendering anything.
const noRoutes: Routes = [{ path: '**', children: [] }];

const preview: Preview = {
  decorators: [
    // Stories get a catch-all router by default, so RouterLink works without
    // importing the real routes (which pull every page into the preview and make
    // TurboSnap re-snapshot all stories on almost any change). A story that needs
    // real routing sets `parameters: { routes }`.
    (storyFn, context) =>
      applicationConfig({
        providers: [
          provideRouter(
            (context.parameters['routes'] as Routes | undefined) ?? noRoutes,
            withComponentInputBinding(),
            withInMemoryScrolling({
              anchorScrolling: 'enabled',
              scrollPositionRestoration: 'enabled',
            }),
          ),
        ],
      })(storyFn, context),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
