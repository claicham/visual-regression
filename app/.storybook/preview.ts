import { applicationConfig, type Preview } from '@storybook/angular-vite';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
} from '@angular/router';
import { routes } from '../src/app/app.routes';
import '../src/styles.scss';

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [
        provideRouter(
          routes,
          withComponentInputBinding(),
          withInMemoryScrolling({
            anchorScrolling: 'enabled',
            scrollPositionRestoration: 'enabled',
          }),
        ),
      ],
    }),
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
