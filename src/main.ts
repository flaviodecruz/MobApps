import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';

import { addIcons } from 'ionicons';
import { heart, heartOutline, settingsOutline } from 'ionicons/icons';

addIcons({
  heart,
  heartOutline,
  settingsOutline,
});

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
      {
        path: 'favorites',
        loadComponent: () =>
          import('./app/favorites/favorites.page')
            .then(m => m.FavoritesPage),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./app/settings/settings.page')
            .then(m => m.SettingsPage),
      },
    ]),
  ],
});
