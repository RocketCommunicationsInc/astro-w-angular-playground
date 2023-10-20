import { ActionReducerMap } from '@ngrx/store';
import { RouterState, routerReducer } from '@ngrx/router-store';
import { EntityDataModuleConfig } from '@ngrx/data';

import { authReducer, authEntityMetadata } from './auth/state';
import { User } from './auth/auth.model';

export type AppState = {
  router: RouterState;
  user: User | null;
};

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
  user: authReducer,
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata: {
    ...authEntityMetadata,
  },
};
