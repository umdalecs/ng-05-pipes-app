import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Pipe({
  name: 'heroFilter',
})
export class HeroFilterPipe implements PipeTransform {
  transform(heroes: Hero[], query: string): Hero[] {
    return heroes.filter(hero=>hero.name.toLocaleLowerCase().includes(query));
  }
}
