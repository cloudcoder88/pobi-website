import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

// Pick your theme preset
import Aura from '@primeng/themes/aura';
// or import Lara from '@primeng/themes/lara';
// or import Nora from '@primeng/themes/nora';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura, // 👈 themes are applied here
      },
    }),
  ],
};
