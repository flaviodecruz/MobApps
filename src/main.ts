import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular(),
    provideHttpClient(), // ✅ THIS WAS MISSING
    provideRouter([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./app/home/home.page').then(m => m.HomePage),
      },
    ]),
  ],
});
