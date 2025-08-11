import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case-pipe';
import { heroes } from '../../services/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly-pipe';
import { HeroColorPipe } from '../../pipes/hero-color-pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color-pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator-pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by-pipe';
import { Hero } from '../../interfaces/hero';
import { HeroFilterPipe } from '../../pipes/hero-filter-pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroTextColorPipe,
    HeroColorPipe,
    HeroCreatorPipe,
    HeroSortByPipe,
    HeroFilterPipe,
  ],
  templateUrl: './custom-page.html',
  styles: ``,
})
export class CustomPage {
  protected name = signal('Alejandro Flores');

  protected uppercase = signal(true);

  protected heroes = signal(heroes);

  protected sortBy = signal<keyof Hero | null>(null);

  protected searchQuery = signal<string>('');

  toggleCase() {
    this.uppercase.update((v) => !v);
  }
}
