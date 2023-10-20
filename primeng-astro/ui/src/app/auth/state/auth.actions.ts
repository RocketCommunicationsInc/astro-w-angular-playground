import { createAction, props } from '@ngrx/store';
import { User } from '../auth.model';

export const login = createAction(
  '[Login Page] User Login',
  props<{ payload: User }>(),
);

export const logout = createAction('[GSB - User Menu] Logout');
