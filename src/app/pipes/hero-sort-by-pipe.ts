import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Pipe({
  name: 'heroSortBy',
})
export class HeroSortByPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy: keyof Hero | null): Hero[] {
    switch (sortBy) {
      case 'name':
        return [...heroes].sort((a, b) => a.name.localeCompare(b.name));
      case 'canFly':
        return [...heroes].sort((a, b) => (a.canFly ? -1 : 1));
      case 'color':
        return [...heroes].sort((a, b) => (a.color > b.color ? -1 : 1));
      case 'creator':
        return [...heroes].sort((a, b) => (a.creator > b.creator ? -1 : 1));
      default:
        return [...heroes];
    }
  }
}
