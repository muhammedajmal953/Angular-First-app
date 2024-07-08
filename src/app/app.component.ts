import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-root',
  template: `<main>
    <header class="brand-name">
    <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
    </header>
    <section>
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
imports:[HomeComponent,HousingLocationComponent,RouterModule]
})
export class AppComponent {
  title = 'homes';
}
