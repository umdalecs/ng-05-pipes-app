import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styles: `:host {
    display: contents;
  }`,
})
export class Navbar {
  protected readonly routes = routes.map((route) => ({
    title: route.title,
    path: route.path,
  }));
}
