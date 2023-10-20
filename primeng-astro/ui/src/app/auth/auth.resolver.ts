import { tap } from 'rxjs';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

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
