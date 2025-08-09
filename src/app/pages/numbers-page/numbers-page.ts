import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './numbers-page.html',
  styles: ``,
})
export class NumbersPage {
  protected totalSells = signal(2_433_232.5567);
  protected percent = signal(0.4856);
}
