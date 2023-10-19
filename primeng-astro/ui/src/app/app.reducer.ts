import { ActionReducerMap } from '@ngrx/store';
import { RouterState, routerReducer } from '@ngrx/router-store';

import { authReducer } from './auth/state';
import { User } from './auth/auth.model';

export type AppState = {
  router: RouterState;
  user: User | null;
};

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
  user: authReducer,
};
