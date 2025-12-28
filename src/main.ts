import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular(),
    provideHttpClient(),
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
      {
        path: 'recipe/:id',
        loadComponent: () =>
          import('./app/recipe-details/recipe-details.page')
            .then(m => m.RecipeDetailsPage),
      },
    ]),
  ],
});
