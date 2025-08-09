import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';

import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Alejandro',
  gender: 'male',
  age: 20,
  address: 'Culiacan, Sinaloa',
};

const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 21,
  address: 'Culiacan, Sinaloa',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    Card,
    UpperCasePipe,
    TitleCasePipe,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    KeyValuePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.html',
  styles: ``,
})
export class UncommonPage {
  protected client = signal(client1);

  protected invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  protected clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Melissa',
    'Natalia',
    'Andrea',
    'Juan',
    'Carlos',
  ]);

  protected clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  });

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    if (this.client() === client2) {
      this.client.set(client1);
      return;
    }
  }

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  protected profile = {
    name: 'Alejandro',
    age: 21,
    address: 'Culiacan, Sinaloa',
  };

  protected promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject('Tenemos un error en la data');
      resolve('Tenemos data en la promesa');
      console.log('Promesa finalizada');
    }, 3500);
  });

  protected myObservableTimer = interval(2000).pipe(
    map((value) => value+1),
    tap((value) => {
      console.log(value);
    })
  );
}
