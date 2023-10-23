import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { provideEntityData, withEffects } from '@ngrx/data';

import { environment } from 'src/environments/environment';
import { routes } from './app.routes';
import {
  DefaultDataServiceProvider,
  appEffects,
  appReducer,
  entityConfig,
  metaReducers,
} from './app.state';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([BrowserAnimationsModule]),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(appReducer, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true,
      },
    }),
    // must come after provideStore
    provideStoreDevtools({ maxAge: 25, logOnly: environment.production }),
    provideEffects(appEffects),
    DefaultDataServiceProvider,
    provideEntityData(entityConfig, withEffects()),
    provideRouterStore(),
  ],
};
