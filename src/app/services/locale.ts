import { Injectable, signal } from '@angular/core';

export type Locales = 'es' | 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private currentLocale = signal<Locales>('fr');

  constructor() {
    this.currentLocale.set((localStorage.getItem('locale') as Locales) ?? 'es');
  }

  get locale() {
    return this.currentLocale();
  }

  changeLocale(locale: Locales) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
