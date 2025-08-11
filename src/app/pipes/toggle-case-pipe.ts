import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, uppercase: boolean): string {
    return uppercase ? value.toUpperCase() : value.toLowerCase();
  }
}
