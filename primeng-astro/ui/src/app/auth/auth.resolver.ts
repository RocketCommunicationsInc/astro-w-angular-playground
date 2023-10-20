import { tap } from 'rxjs';
import { ResolveFn } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';
import { EntityDataService } from '@ngrx/data';

import { AuthDataService } from './services/auth-data.service';
import { userKey } from './auth.model';

export const authResolver: ResolveFn<boolean> = () => {
  const entityDataService = inject(EntityDataService);
  const authDataService = inject(AuthDataService);
  const authService = inject(AuthService);
  entityDataService.registerService(userKey, authDataService);

  return authService.loaded$.pipe(
    tap((loaded) => {
      if (!loaded) {
        authService.getAll();
      }
    }),
  );
};
