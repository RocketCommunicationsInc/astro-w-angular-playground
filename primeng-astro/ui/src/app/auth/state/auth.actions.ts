import { createAction, props } from '@ngrx/store';
import { User } from '../auth.model';

export const login = createAction(
  '[Auth Component] Login',
  props<{ payload: User }>()
);

export const logout = createAction('[Auth Component] Logout');
