import { tap } from 'rxjs';
import { inject } from '@angular/core';

import { ResolveFn } from '@angular/router';
import { AuthService } from './auth.service';

export const authResolver: ResolveFn<boolean> = () => {
  const authService = inject(AuthService);

  return authService.loaded$.pipe(
    tap((loaded) => {
      if (!loaded) {
        authService.getAll();
      }
    }),
  );
};
