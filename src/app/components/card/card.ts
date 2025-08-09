import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styles: ``
})
export class Card {
  readonly title=input.required();
}
