import {
  ApplicationConfig,
  LOCALE_ID,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { registerLocaleData } from '@angular/common';

import localeEsMX from '@angular/common/locales/es-MX';
import localeFrCA from '@angular/common/locales/fr-CA';

import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LocaleService } from './services/locale';

registerLocaleData(localeEsMX, 'es');
registerLocaleData(localeFrCA, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),

    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.locale,
    },
  ],
};
