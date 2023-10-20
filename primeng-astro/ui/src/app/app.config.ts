import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { RouterState, provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { provideEntityData, withEffects } from '@ngrx/data';

import { routes } from './app.routes';
import { appReducer, entityConfig } from './app.reducer';
import { appEffects } from './app.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([BrowserAnimationsModule]),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(appReducer, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true,
      },
    }),
    // must come after provideStore
    provideStoreDevtools({ maxAge: 25, logOnly: true }),
    provideEffects(appEffects),
    provideEntityData(entityConfig, withEffects()),
    provideRouterStore({
      routerState: RouterState.Minimal,
    }),
  ],
};
