import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import {
  DatePipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Locales, LocaleService } from '../../services/locale';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
  styles: ``,
})
export class BasicPage {
  private readonly localeService = inject(LocaleService);

  protected currentLocale = signal(inject(LOCALE_ID));

  protected nameLower = signal('alejandro');
  protected nameUpper = signal('ALEJANDRO');
  protected fullName = signal('aLejAnDRo FlOREs');

  protected customDate = signal(new Date());

  private tickingDateEffect = effect((cleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    cleanup(() => {
      clearInterval(interval);
    });
  });

  changeLocale(locale: Locales) {
    this.localeService.changeLocale(locale);
  }
}
