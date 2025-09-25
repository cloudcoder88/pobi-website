import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from  '@primeuix/themes/aura';
// Pick your theme preset
// or import Lara from '@primeng/themes/lara';
// or import Nora from '@primeng/themes/nora';
// or you can also import Aura here
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
