import { provideHttpClient } from '@angular/common/http';
import { enableProdMode, inject, provideAppInitializer } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngxs/store';
import { AppComponent } from './app/app';
import { appRoutes } from './app/app-routes';
import { AppService } from './app/app-service';
import { appStateFeatures, appStateOptions, appStates } from './app/app-states';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter(appRoutes),
    provideStore(appStates, appStateOptions, ...appStateFeatures),
    provideAppInitializer(() => inject(AppService).init()),
  ],
  // eslint-disable-next-line no-console
}).catch(err => console.error(err));
