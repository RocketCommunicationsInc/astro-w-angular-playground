import { inject } from '@angular/core';
import { Actions, FunctionalEffect, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

import { login, logout } from './auth.actions';

const loginEffect = () => {
  const router = inject(Router);
  const actions = inject(Actions);
  return actions.pipe(
    ofType(login),
    tap(({ payload }) => {
      localStorage.setItem('user', JSON.stringify(payload));
      router.navigateByUrl('/dashboard');
    })
  );
};

const logoutEffect = () => {
  const router = inject(Router);
  const actions = inject(Actions);
  return actions.pipe(
    ofType(logout),
    tap(() => {
      localStorage.removeItem('user');
      router.navigateByUrl('/login');
    })
  );
};

export const authEffects: { [key: string]: FunctionalEffect } = {
  login$: createEffect(loginEffect, {
    functional: true,
    dispatch: false,
  }),

  logout$: createEffect(logoutEffect, {
    functional: true,
    dispatch: false,
  }),
};
