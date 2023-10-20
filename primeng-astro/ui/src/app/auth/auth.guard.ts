import { map, tap } from 'rxjs';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { AppState } from '../app.state';
import { selectUserState } from './state';

export const authGuard: CanActivateFn = () => {
  const store = inject(Store<AppState>);
  const router = inject(Router);

  return store.pipe(
    select(selectUserState),
    map((user) => Boolean(user)),
    tap((user) => {
      if (!user) {
        router.navigateByUrl('/login');
      }
    }),
  );
};
